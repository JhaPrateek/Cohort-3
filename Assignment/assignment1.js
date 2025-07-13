import express from "express";
const app=express();


app.get("/add",(req,res)=>{
    let a=+req.query.a;
    let b=+req.query.b;
    let ans=a+b;
    res.send({
        ans
    })
})

app.get("/subtract",(req,res)=>{
    let a=+req.query.a;
    let b=+req.query.b;
    let ans=a-b;
    res.send({
        ans
    })
})

app.get("/multiply",(req,res)=>{
    let a=+req.query.a;
    let b=+req.query.b;
    let ans=a*b;
    res.send({
        ans
    })
})

app.get("/divide",(req,res)=>{
    let a=+req.query.a;
    let b=+req.query.b;
    let ans=a/b;
    res.send({
        ans
    })
})


app.listen(3000);