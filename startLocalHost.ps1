Add-Type -AssemblyName System.Net.HttpListener
$h = New-Object System.Net.HttpListener
$h.Prefixes.Add("http://localhost:8000/")
$h.Start()
Write-Host "Serving $pwd on http://localhost:8000/"
while ($h.IsListening) {
    $ctx = $h.GetContext()
    $req = $ctx.Request
    $file = Join-Path $pwd ($req.Url.LocalPath.TrimStart('/'))
    if (!(Test-Path $file)) { $file = "$pwd\index.html" }
    $resp = $ctx.Response
    $bytes = [IO.File]::ReadAllBytes($file)
    $resp.OutputStream.Write($bytes,0,$bytes.Length)
    $resp.Close()
}