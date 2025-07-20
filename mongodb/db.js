import mongoose from "mongoose";

const Schema=mongoose.Schema;
const objectId=Schema.ObjectId;

const user=new Schema({
    name:String,
    email:String,
    password:String
})

const todo=new Schema({
    userId:objectId,
    titlle:String,
    done:Boolean
})

const userModel=mongoose.model("user",user);
const todoModel=mongoose.model("todo",todo);

export {userModel,todoModel};