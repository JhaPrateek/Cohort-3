import {Command} from "commander";
import { log } from "console";
import fs from "fs";
const program=new Command();

program
.name("count")
.argument("<filePath>","return length of file")
.action((filepath)=>{
    const data= fs.readFileSync(filepath,"utf-8");
    console.log(data.length);
    
})

program.parse();
