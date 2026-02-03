const fs = require("fs");

const helper = (err,data) =>{
    console.log(data);
}

fs.readFile("/Volumes/T7 Shield/harkirat assignment/easy/abc.txt","utf-8",helper);
let s = 0;

for(let i=0;i<1000000;i++)
{
    s += i;
}
console.log(s);