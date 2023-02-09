//jshint esversion:6

const express= require("express");
const bodyparser=require("body-parser");
const app=express();
app.get("/",function(req,res){
    var today=new Date();
    var currentday=today.getDay();
    if(currentday===6||currentday===0){
        res.sendFile(__dirname+"/weekend.html");
    }else{
        res.sendFile(__dirname+"/weekday.html");
    }
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});