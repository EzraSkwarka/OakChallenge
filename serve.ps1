# serve.ps1 - Minimal static server with explicit CSP (no unsafe-eval), correct MIME types, and basic 404s.

Add-Type -AssemblyName System.Net.HttpListener

$port = 8000
$root = (Get-Location).Path
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving $root on $prefix (Ctrl+C to stop)"

# Basic content types
$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".htm"  = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".txt"  = "text/plain; charset=utf-8"
}

# Strict CSP for our static app (no eval, no inline scripts)
$csp = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'"

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $resp = $ctx.Response

    # Map URL to file
    $path = $req.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }

    $full = Join-Path $root $path

    # Serve index.html for directories
    if ((Test-Path $full) -and (Get-Item $full).PSIsContainer) {
      $full = Join-Path $full "index.html"
    }

    # Not found → 404
    if (-not (Test-Path $full)) {
      $resp.StatusCode = 404
      $notFound = "<!doctype html><meta charset='utf-8'><title>404</title><h1>404 Not Found</h1>"
      $bytes = [Text.Encoding]::UTF8.GetBytes($notFound)
      $resp.ContentType = "text/html; charset=utf-8"
      $resp.Headers["Content-Security-Policy"] = $csp
      $resp.OutputStream.Write($bytes, 0, $bytes.Length)
      $resp.Close()
      continue
    }

    # Determine MIME type
    $ext = [IO.Path]::GetExtension($full).ToLower()
    $contentType = $mime[$ext]
    if (-not $contentType) { $contentType = "application/octet-stream" }

    try {
      $bytes = [IO.File]::ReadAllBytes($full)
      $resp.StatusCode = 200
      $resp.ContentType = $contentType
      $resp.Headers["Content-Security-Policy"] = $csp
      $resp.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      $resp.StatusCode = 500
      $msg = "<!doctype html><meta charset='utf-8'><title>500</title><h1>500 Server Error</h1><pre>$($_.Exception.Message)</pre>"
      $err = [Text.Encoding]::UTF8.GetBytes($msg)
      $resp.ContentType = "text/html; charset=utf-8"
      $resp.Headers["Content-Security-Policy"] = $csp
      $resp.OutputStream.Write($err, 0, $err.Length)
    } finally {
      $resp.Close()
    }
  }
} finally {
  $listener.Stop()
}