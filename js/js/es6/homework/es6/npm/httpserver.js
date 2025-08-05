var http=require("http");
var fs=require("fs");
var path=require("path");
http.createServer((request,response)=>{
    if (request.url ==="/") {
    const filepath = path.join(__dirname, "app.html")
    fs.readFile(filepath,(err,data)=>{
        if(err){
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    });}
}).listen(8080, ()=>{
    console.log("Server running at http://localhost:8081/");
});
// This code sets up a simple HTTP server that serves files from the filesystem