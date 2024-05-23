// a built in module in nodejs that is

require('dotenv').config()

// const http = require("http");

//export express

const express = require("express");
//same as import express form "express"
 
//only difference is iof style that is common js and module js

const app = express();
//this is an instanc of express 
//example when we have Math then we can use math. random or math.pi or math.pow 

const port = 5000
//we have many virtuals ports some ports are free


app.get('/fanclash' , (req,res) => {
    res.send("Hello! Arpit from fanclash")
})


app.get("/home" , (req, res) => {
    return res.send("Hello From Page 1 arpit");
});

app.get("/about" , (req, res) => {
    return res.send("Hello From Page 2");
});

//can done done for app.post("/.....")

// const myServer = http.createServer(app); 

app.listen(process.env.PORT , ()  =>  console.log(`server has started! ${port} `));

// // 2 parameteres req and res (req to know everything about nodejs client)
// // handler function
// const myServer = http.createServer((req ,res) => {
//     console.log("new request is made");
//     res.end("hello from server");
// });

// // to run a server we need a port 
// // that can be any port in your local host

// // to listen 

// myServer.listen(8000 , ()  =>  console.log(" server has started!"));

