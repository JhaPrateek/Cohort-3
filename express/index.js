import express, { json } from "express";
const app=express();

const users=[{
    name:"Prateek",
    kidney:[{
        healthy:true
    }]
}]

app.use(json())

app.get("/",(req,res)=>{
    const totalKidney=users[0].kidney.length;
    let goodKidney=0;
    for(let i=0;i<totalKidney;i++){
        if(users[0].kidney[i].healthy===true){
            goodKidney++;
        }
    }
    let badKidney=totalKidney-goodKidney;
    res.json({
        totalKidney,
        goodKidney,
        badKidney
    })
})


app.post("/",(req,res)=>{
    let isHealthy=req.body.isHealthy
    users[0].kidney.push({
        healthy:isHealthy      
    }) 
    
    res.json({
        msg:"kidney added successfully"
    })
})

app.put("/",(req,res)=>{
    const arr=[];
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy===true){
            arr.push({
                healthy:true
            })
        }
    }
    users[0].kidney=arr
    res.send("Bad jidney remved successfully")
})

app.listen(3000);