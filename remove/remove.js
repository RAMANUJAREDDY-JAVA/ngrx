// insert.js is used to create DELETE request
// this file is used to make custom module (delete)

// import the modules
const express=require("express");
const mongodb=require("mongodb");

const ramIT=mongodb.MongoClient;

const remove=express.Router().delete("/",(req,res)=>{
    ramIT.connect("mongodb+srv://admin:admin@cluster0.aqfq4.mongodb.net/angdb?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db=conn.db("angdb");
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });
});

module.exports=remove;