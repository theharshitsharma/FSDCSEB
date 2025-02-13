const http = require('http');
const PORT = 31099;
const server = http.createServer((req,res) => {
    console.log("Inside Server Body !");
    res.setHeader('Content-type', "text/html");
    res.write("<div style='background-color:brown'><marquee>WELCOME TO SERVER</marquee>\n");
    res.end("<H3 style='color:red'>SERVER ENDED !</H3>\n");
});

server.listen(PORT, () => {
    console.log("Server running on PORT : " + PORT);
});