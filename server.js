const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Note = require("./models/Note")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false })) //true -> Nested objs are correct. e.g {obj:{ }}
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://jotinhirom0').then(() => {

    app.get("/", (req, res) => {
        res.write("This is home page.")
        res.send()
    })
    const noteRouter = require("./routes/route")
    app.use("/notes",noteRouter)
    // app.get("/notes", async (req, res) => {
    //     res.write("This is note page.")
    //     res.send()
    // })
    // app.get("/notes/list", async (req, res) => {
    //     let notes = await Note.find()
    //     res.json(notes)

    // })
    // //select
    // // app.get("/notes/list/:userID", async (req, res) => {
    // //     let notes = await Note.find({
    // //         userID: req.params.userID
    // //     })
    // //     res.json(notes)
    // // })
    // app.post("/notes/list/", async (req, res) => {
    //     let notes = await Note.find({
    //         userID: req.body.userID
    //     })
    //     res.json(notes)
    // })
    // //add
    // app.post("/notes/add", async (req, res) => {
    //     //delete // repeat twbado yadanaba
    //     await Note.deleteOne({id : req.body.id})
    //     let newnotes = Note({
    //         id: req.body.id,
    //         userID: req.body.userID,
    //         title: req.body.title,
    //         content: req.body.content
    //     })
    //     await newnotes.save()
    //     let response = { message: "Note added successfully with " + req.body.id }
    //     res.json(response)
    // })

    // app.post("/notes/delete", async (req, res) => {
    //     //delete
    //     await Note.deleteOne({id : req.body.id})
    //     let response = { message: "Note deleted successfully with " + req.body.id }
    //     res.json(response)
    // })
});

app.listen(2000, () => {
    console.log('listening on port: 2000')
})