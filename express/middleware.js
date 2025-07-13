import express from "express";
const app=express();

function ageCheck(req,res,next){
    let n=req.query.n;
    if(n>=14){
        next();
    }else{
        res.send("You are not allowed")
    }
}

app.use(ageCheck);

app.get("/",(req,res)=>{
    res.send("You are allowed")
})



app.listen(3001);