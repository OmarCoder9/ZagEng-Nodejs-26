const express = require("express")
const app = express()
const PORT = 3000
const {body, validationResult} = require("express-validator")
app.use(express.json())

const logger = (req, res, next)=>{
    console.log(`Request Method: ${req.method} Request URL: ${req.url}`);
    next()
}

let students = [
    {id:1, name: "Omar", age:19, department:"Software Engineering"},
    {id:2, name:"Tahany", age:21, department:"Computer Science"},
    {id:3, name:"Shams", age:21, department:"Computer Science"}
]
app.use(logger)

app.get("/", (req, res)=>{
    res.send("Home Page")
})

//Task 1
app.get("/students", (req, res)=>{
    res.status(200).json(students)
})

//Task 2
app.get("/students/:id", (req, res)=>{
    const id = +req.params.id
    const std = students.find((s)=> s.id === id)
    if(!std){
        return res.status(404).json({error: "Student not Found"})
    }
    res.status(200).json(std)
})

//Task 3
app.get("/students/search/:deptName", (req, res)=>{
    const deptName = req.params.deptName
    const allStudents = students
    const stds = allStudents.filter((s)=> s.department.replaceAll(" ", "-").toLowerCase() === deptName.replaceAll(" ", "-").toLowerCase())
    if(stds.length === 0){
        return res.status(404).json({error: `No Students in ${deptName}`})
    }
    res.status(200).json(stds)
})
 //Task 4
app.post("/students",[
    body("name").trim().notEmpty(),
    body("age").isInt({gt:15}),
    body("department").trim().notEmpty()
],(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: "Validation Failed"})
    }
    const std = {id: students.length + 1, ...req.body}
    students.push(std)
    const resJSON = {
        msg: "Student Created Successfully",
        student: std
    }
    res.status(201).json(resJSON)
})

//Task 5
app.put("/students/:id", (req, res)=>{
    const id = +req.params.id
    const std = students.find(s => s.id === id)
    if(!std){
        return res.status(404).json({error: "Student not Found"})
    }
    const {name, age, department} = req.body
    if(!name && !age && !department){
        return res.status(400).json({msg: "No data provided"})
    }
    if(name) std.name = name
    if(age) std.age = age
    if(department) std.department = department
    res.status(200).send("Student Updated Successfully")
})

//Task 6
app.delete("/students/:id", (req,res)=>{
    const id = +req.params.id

    const idx = students.findIndex(s => s.id === id)

    if(idx === -1){
        return res.status(404).json({error: "Student not Found"})
    }
    students.splice(idx, 1)

    res.status(200).json({msg: "Student deleted Successfully"})

})

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})