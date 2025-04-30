const express = require("express")
const mongoose = require("mongoose")
const noteModel = require("./model/noteModel")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/xusuusQor").then(() => {
    console.log("Connected successFully")
}).catch(error => console.log(error))

// create Data
app.post("/note/create", async (req, res) => {
    const newNote = noteModel(req.body)
    const saveData = await newNote.save()
    if(saveData){
        res.send(saveData)
    }
})

// read data
app.get("/note/read", async (req, res) => {
    const getData = await noteModel.find()
    if(getData){
        res.send(getData)
    }
})

// read single data
app.get("/note/readSingle/:id" , async (req, res) => {
    const readSingleData = await noteModel.findOne({_id: req.params.id})
    if(readSingleData){
        res.send(readSingleData)
    }
})

// update
app.put("/note/update/:id", async (req, res) => {
    const putData = await noteModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(putData){
        res.send("success Update")
    }
})

// delete 
app.delete("/note/delete/:id", async (req, res) => {
    const removeData = await noteModel.deleteOne({_id: req.params.id})
    if(removeData){
        res.send("success delete")
    }
})

app.listen(3000, () => console.log("Server is running on 3000"))