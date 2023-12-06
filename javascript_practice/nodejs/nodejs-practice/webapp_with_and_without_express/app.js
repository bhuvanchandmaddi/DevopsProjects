const express = require('express');

const app=express()

//sever listens on port 3000
app.listen(3000)

// get request
app.get("/",(req,res)=>{
    res.sendFile("./views/index.html",{ root: __dirname})
})

// get request
app.get("/about",(req,res)=>{
    res.sendFile("./views/about.html",{ root: __dirname})
})

// Handle redirect
app.get("/about-us",(req,res)=>{
    res.redirect(about)
})

//Handle 404
// Remnber this put gets called every time. So if above conditions doesn`t match then request comes here
// path is not required here, because it matches for everything
// we need to send response code also explicitly
app.use((req,res)=>{
    res.status(404).sendFile("./views/404.html",{ root: __dirname})
})


