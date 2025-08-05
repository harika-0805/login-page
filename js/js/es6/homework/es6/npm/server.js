var http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World\n");
}).listen(8081);
console.log("Server running at http://localhost:8081/");


