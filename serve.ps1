# serve.ps1 - Minimal static server with explicit CSP (no unsafe-eval), correct MIME types, and basic 404s.

param(
  [int]$Port = 8000,
  [string]$Root = (Get-Location).Path
)

$prefix = "http://localhost:$Port/"
$listener = $null

# Basic content types (extended)
$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".htm"  = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".mjs"  = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".webmanifest" = "application/manifest+json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".webp" = "image/webp"
  ".woff" = "font/woff"
  ".woff2" = "font/woff2"
  ".ttf"  = "font/ttf"
  ".mp4"  = "video/mp4"
  ".txt"  = "text/plain; charset=utf-8"
}

# Strict CSP for our static app (no eval, no inline scripts)
$csp = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'"

function Write-Response($resp, [int]$status, [string]$contentType, [byte[]]$bytes) {
  $resp.StatusCode = $status
  $resp.ContentType = $contentType
  $resp.Headers["Content-Security-Policy"] = $csp
  # Minimal caching for static assets; HTML disabled to avoid stale pages
  if ($contentType -like "text/html*") { $resp.Headers["Cache-Control"] = "no-store" } else { $resp.Headers["Cache-Control"] = "public, max-age=3600" }
  $resp.OutputStream.Write($bytes, 0, $bytes.Length)
}

function Send-404($resp) {
  $notFound = "<!doctype html><meta charset='utf-8'><title>404</title><h1>404 Not Found</h1>"
  $bytes = [Text.Encoding]::UTF8.GetBytes($notFound)
  Write-Response $resp 404 "text/html; charset=utf-8" $bytes
}

function Send-500($resp, $ex) {
  $msg = "<!doctype html><meta charset='utf-8'><title>500</title><h1>500 Server Error</h1><pre>$([System.Web.HttpUtility]::HtmlEncode($ex.Message))</pre>"
  $bytes = [Text.Encoding]::UTF8.GetBytes($msg)
  Write-Response $resp 500 "text/html; charset=utf-8" $bytes
}

try {
  $listener = [System.Net.HttpListener]::new()
  $listener.Prefixes.Add($prefix)
  try {
    $listener.Start()
  } catch [System.Net.HttpListenerException] {
    Write-Warning "Failed to start HttpListener on $prefix (access denied)."
    Write-Host "Run this once as Administrator, then re-run serve.ps1:" -ForegroundColor Yellow
    Write-Host "  netsh http add urlacl url=$prefix user=$env:USERNAME" -ForegroundColor Yellow
    throw
  }

  Write-Host "Serving $Root on $prefix (Ctrl+C to stop)"

  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $resp = $ctx.Response

    try {
      # Map URL to file
      $path = $req.Url.LocalPath.TrimStart('/')
      if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }

      $full = Join-Path $Root $path

      # Serve index.html for directories
      if ((Test-Path $full) -and (Get-Item $full).PSIsContainer) {
        $full = Join-Path $full "index.html"
      }

      if (-not (Test-Path $full)) {
        Send-404 $resp
        continue
      }

      # Determine MIME type
      $ext = [IO.Path]::GetExtension($full).ToLower()
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }

      # Read and send
      $bytes = [IO.File]::ReadAllBytes($full)
      Write-Response $resp 200 $contentType $bytes
    } catch {
      Send-500 $resp $_.Exception
    } finally {
      try { $resp.Close() } catch {}
    }
  }
} finally {
  if ($listener) { try { $listener.Stop() } catch {} }
}
