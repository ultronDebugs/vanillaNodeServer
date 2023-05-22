// import http from "http";
const http = require("http");
const PORT = 4000;

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/api" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.write("Hi there, This is a Vanilla Node.js API");

    //end the response
    res.end();
  } else {
    console.log("no response set for this route");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello there is nothing here yet, check out our other routes");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
