const fs = require("fs");

const helper = (err,data) =>{
    if(err)
    {
        console.log(err);
    }
    console.log(data);
}

fs.writeFile("/Volumes/T7 Shield/harkirat assignment/easy/abc.txt","i am fine","utf-8",helper);
let s = 0;

for(let i=0;i<1000000;i++)
{
    s += i;
}
console.log(s);