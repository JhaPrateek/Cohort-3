const user=[
    {fname:"fname1",lname:"lname1",age:28},
    {fname:"fname2",lname:"lname2",age:48},
    {fname:"fname3",lname:"lname3",age:20},
    {fname:"fname4",lname:"lname4",age:29},
    {fname:"fname5",lname:"lname5",age:33},
]

const ans=user.reduce((acc,cur)=>{
    if(cur.age>30){
        acc.push(cur.fname);
    }
    return acc;
},[])

console.log(ans);
