const fs = require('fs');
const path = require('path');
const os = require('os')

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());

//make directory  
fs.mkdir(path.join(__dirname , '/tests' ) , { recursive: true } , err=> {
    if (err) {
        throw err;
    }
    else
     console.log("File created");
} )

// remove file
// fs.rmdir(path.join(__dirname , '/tests' ) , { } , err=> {
//     if (err) {
//         throw err;
//     }
//     else
//      console.log("File created");
// } )

// write file and text 
// fs.writeFile(path.join(__dirname , '/test' , 'testw.txt' ) , 'salamlar' , err=> {
//     if (err) {
//         throw err;
//     }
//     else
//      console.log("Written");

//      fs.appendFile(path.join(__dirname , '/test' , 'testw.txt' ) , ' Jalə' , err=> {
//         if (err) {
//             throw err;
//         }
//         else
//          console.log("Written");
//         } )
// } )

// fs.writeFile(path.join(__dirname , 'tests.js' ) , '' , err=> {
//     if (err) {
//         throw err;
//     }
//     else
//      console.log("File created");
// } )