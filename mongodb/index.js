import express, { json } from "express";
import { userModel,todoModel } from "./db";
import jwt from "jsonwebtoken"
const app=express();
app.use(express.json())
const SECRET_KEY="iamprateekjha"


app.post("/signup",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    await userModel.create({
        name:name,
        email:email,
        password:password
    })

    res.json({
        msg:"You have successfully created your account."
    })
})

app.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const user=await userModel.findOne({
        email:email,
        password:password
    })

    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },SECRET_KEY)

        res.json({
            token
        })
    }else{
        res.status(404).send("User not found")
    }
})

const auth=(req,res,next)=>{
    
}

app.post("/todo",(req,res)=>{
    
})

app.get("/todo",(req,res)=>{
    
})



app.listen(3000);