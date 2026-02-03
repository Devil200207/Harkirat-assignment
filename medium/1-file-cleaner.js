const fs = require("fs");


let originalContent = fs.readFileSync("/Volumes/T7 Shield/harkirat assignment/medium/abc.txt","utf-8")
console.log(originalContent);

let normalstring = originalContent.replace(/\s+/g, ' ')

console.log(normalstring)

fs.writeFileSync("/Volumes/T7 Shield/harkirat assignment/medium/abc.txt",normalstring,"utf-8");