import express from "express";
import jwt from "jsonwebtoken";

const app=express();
app.use(express.json());

const SECRET_KEY="HELLOMYNAMEISPRATEEK"

const users=[];

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.send("You have successfully created your account")
})

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let userFound;

    const user=users.find(user=>user.username==username && user.password==password)

    if(!user){
       return res.status(404).send("User does not exist");
    }

    const token=jwt.sign({
        name:username
    },SECRET_KEY);

    user.token=token;

    res.json({
        token
    })
})

app.get("/me",(req,res)=>{
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token,SECRET_KEY);
    const username=decodedInformation.name;

    let user=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            user=users[i];
            break;
        }
    }

    if(user==null){
        return res.send("You are not authorised")
    }

    res.json({
        name:user.username,
        password:user.password
    })

})


app.listen(3000);
