

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 resolved")
    },20000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 resolved")
    },40000)
})


async function handler(){
    const val1=await p1;

    console.log("Hii");
    console.log(val1);
    
    const val2=await p2;

    console.log("Hello");
    console.log(val2);
    
}

handler()