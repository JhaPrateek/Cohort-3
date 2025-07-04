console.log("Program started");

setTimeout(()=>{
    console.log("Inside timeout");
},1000)

console.log("After timeout");

let cnt=0;

for(let i=0;i<1000000000;i++){
    cnt++;
}

console.log("Program ended with count "+cnt);


// ---Output---
// Program started
// After timeout
// Program ended with count 1000000000
// Inside timeout