// insert.js is used to create PUT request
// this file is used to make custom module (update)

// import the modules
const express=require("express");
const mongodb=require("mongodb");

const ramIT=mongodb.MongoClient;

const update=express.Router().put("/",(req,res)=>{
    ramIT.connect("mongodb+srv://admin:admin@cluster0.aqfq4.mongodb.net/angdb?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db=conn.db("angdb");
            db.collection("products").updateOne({"p_id":req.body.p_id},
                {$set:{"p_name":req.body.p_name,
                "p_cost":req.body.p_cost}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });
        }
    });
});

module.exports=update;