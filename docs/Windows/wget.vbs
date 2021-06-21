if Wscript.Arguments.Count < 2 then
    Wscript.Echo "Usage: " & Wscript.ScriptName & " <file> <URL>"
    Wscript.Quit 1
end if

Dim http
Set http = CreateObject("Microsoft.XMLHTTP")
http.Open "GET", Wscript.Arguments(1), False
http.Send

Dim stream
Set stream = CreateObject("Adodb.Stream")
With stream
    .Type = 1 ' binary
    .Open
    .Write http.ResponseBody
    .SaveToFile Wscript.Arguments(0), 2 ' overwrite
    .Close
End With

Wscript.Echo http.getAllResponseHeaders
