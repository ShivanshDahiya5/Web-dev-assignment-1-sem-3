// const fs = require('fs')
// const filename = 'utility.txt'

// fs.writeFile(filename, 'Data Created.\n', (err)=>{
//     if(err){
//         console.log("Error in file creating", err);
//         return;
//     }
//     console.log("File Created Successfully.");

//     fs.readFile(filename, 'utf8', (err, data)=>{
//         if(err){
//             console.log("Error in reading file:", err);
//             return;
//         }
//         console.log("File Content: "+ data);

//         fs.appendFile(filename, 'New Log Entry.\n', (err)=>{
//             if(err){
//                 console.log("Error in appending file", err);
//                 return;
//             }
//             console.log("File Updated Successfully");

//             fs.unlink(filename, (err)=>{
//                 if(err){
//                     console.log("Error in deleting file", err);
//                     return;
//                 }
//                 console.log("File Deleted Successfully");
//             });
//         });
//     });
// });