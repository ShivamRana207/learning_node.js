const fs = require('fs');
// fs.readFile is used to read data from the file
//fs.readFile('file.txt', 'utf8',(err, data)=>{
  //  console.log(err, data)
//})

const a = fs.readFileSync('file.txt')
console.log(a.toString());

