import express from "express"
const app=express();

let todos=[];

app.use(express.json())

// Get all todo
app.get("/todo",(req,res)=>{
    res.json(todos)
})

//Post all todo
app.post("/",(req,res)=>{
    todos.push({
        id:`${req.body.id}`,
        title:`${req.body.title}`
    })
    res.send("Added successfully");
})

//Delete a todo
app.delete("/delete/:id",(req,res)=>{
    const newTodo=[];
    let idTodelete=req.params.id;
    for(let i=0;i<todos.length;i++){
        if(idTodelete!=todos[i].id){
            newTodo.push(todos[i])
        }
    }
    todos.length=0;
    todos=[...newTodo];
    res.send("Deleted successfully")
})


app.listen(3000)