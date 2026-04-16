const fs = require("fs")

//Part A
fs.writeFileSync("data.txt", "Synchronous Test")

const data = fs.readFileSync("data.txt", "utf-8")

console.log("Part A Data:", data);

//Part B

fs.writeFile("data_async.txt", "Asynchronous Test", (err) =>{
    if(err){
        console.error("Error Writing File: ", err)
        return;
    }
    fs.readFile("data_async.txt", "utf-8", (err, data) =>{
        if(err){
        console.error("Error Reading File: ", err)
        return;
        }
        console.log("Part B Data:", data);
    })    
})


