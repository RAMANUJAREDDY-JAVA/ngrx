// fetch.js is used to create GET request
// this file is used to make custom module (fetch)

const express=require("express");
const mongodb=require("mongodb");

const ramIT=mongodb.MongoClient;

const fetch=express.Router().get("/",(req,res)=>{
    ramIT.connect("mongodb+srv://admin:admin@cluster0.aqfq4.mongodb.net/angdb?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db=conn.db("angdb");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }    
            });
        }
    });
});

module.exports=fetch;