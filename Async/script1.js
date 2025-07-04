import { log } from 'console';
import fs from 'fs';

//----------------------------------------Synchronus---------------------------------------------------------
const data=fs.readFileSync('./a.txt','utf-8');         

console.log(data);


// ---------------------------------------Asynchronous------------------------------------------------------
function cb(err,data){
    if(err){
        console.log("Invalid File");
    }else{
        console.log(data);
    }
}

fs.readFile('./b.txt','utf-8',cb)


