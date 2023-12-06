const http = require("http");
const fs=require("fs");
const _=require("lodash")
const server = http.createServer((req, res) => {
//   console.log("requested came");
//   console.log(req.url)
//   console.log(req.method)
console.log(_.random(1,30))

let path="./views/"
res.setHeader("Content-Type","text/html")

switch(req.url){
    case "/":
        path+="index.html"
        res.statusCode=200
        break;
    case "/about":
        path+="about.html"
        res.statusCode=200
        break;
    // to handle redirects    
    case "/about-me":
        res.statusCode=301
        res.setHeader('Location', '/about')
        res.end();
        break;
    default:
        path+="404.html"
        res.statusCode=404
}


  // read from the html file
  fs.readFile(path,"utf-8",(err,data)=>{
    if (err){
        console.log(err)
        res.end()
    }
    //res.write(data)
    res.end(data)
  })
  
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });

