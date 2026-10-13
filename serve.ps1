param(
  [int]$Port = 8000,
  [string]$Root = (Get-Location).Path
)

$prefix = "http://localhost:$Port/"
$listener = $null

$mime = @{
  ".html"  = "text/html; charset=utf-8"
  ".htm"   = "text/html; charset=utf-8"
  ".css"   = "text/css; charset=utf-8"
  ".js"    = "application/javascript; charset=utf-8"
  ".mjs"   = "application/javascript; charset=utf-8"
  ".json"  = "application/json; charset=utf-8"
  ".png"   = "image/png"
  ".jpg"   = "image/jpeg"
  ".jpeg"  = "image/jpeg"
  ".gif"   = "image/gif"
  ".svg"   = "image/svg+xml"
  ".ico"   = "image/x-icon"
  ".webp"  = "image/webp"
  ".woff"  = "font/woff"
  ".woff2" = "font/woff2"
  ".ttf"   = "font/ttf"
  ".txt"   = "text/plain; charset=utf-8"
}

$csp = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'"

function Write-Response($resp, [int]$status, [string]$contentType, [byte[]]$bytes) {
  $resp.StatusCode = $status
  $resp.ContentType = $contentType
  $resp.Headers["Content-Security-Policy"] = $csp
  if ($contentType -like "text/html*") { $resp.Headers["Cache-Control"] = "no-store" } else { $resp.Headers["Cache-Control"] = "public, max-age=3600" }
  $resp.OutputStream.Write($bytes, 0, $bytes.Length)
}

function Send-404($resp) {
  $bytes = [Text.Encoding]::UTF8.GetBytes("<!doctype html><title>404</title><h1>404</h1>")
  Write-Response $resp 404 "text/html; charset=utf-8" $bytes
}

try {
  $listener = [System.Net.HttpListener]::new()
  $listener.Prefixes.Add($prefix)
  $listener.Start()
  Write-Host "Serving $Root on $prefix (Ctrl+C to stop)"

  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $resp = $ctx.Response
    try {
      $path = $ctx.Request.Url.LocalPath
      if ($path.StartsWith("/OakChallenge/", [System.StringComparison]::OrdinalIgnoreCase)) {
        $path = $path.Substring("/OakChallenge/".Length)
      } else {
        if ($path -eq "/" -or $path -eq "") { $path = "index.html" }
      }
      $path = $path.TrimStart('/')
      if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }

      $full = Join-Path $Root $path
      if ((Test-Path $full) -and (Get-Item $full).PSIsContainer) {
        $full = Join-Path $full "index.html"
      }
      if (-not (Test-Path $full)) { Send-404 $resp; continue }

      $ext = [IO.Path]::GetExtension($full).ToLower()
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }

      $bytes = [IO.File]::ReadAllBytes($full)
      Write-Response $resp 200 $contentType $bytes
    } catch {
      $err = [Text.Encoding]::UTF8.GetBytes("<!doctype html><title>500</title><h1>500</h1><pre>$($_.Exception.Message)</pre>")
      Write-Response $resp 500 "text/html; charset=utf-8" $err
    } finally {
      try { $resp.Close() } catch {}
    }
  }
} finally {
  if ($listener) { try { $listener.Stop() } catch {} }
}
