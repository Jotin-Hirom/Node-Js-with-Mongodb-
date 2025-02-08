const express = require('express')
const router = express.Router()

const Note = require('./../models/note')


router.get("/", async (req, res) => {
    res.write("This is note page.")
    res.send()
})
router.get("/list", async (req, res) => {
    let notes = await Note.find()
    res.json(notes)

})
//select
// router.get("/notes/list/:userID", async (req, res) => {
//     let notes = await Note.find({
//         userID: req.params.userID
//     })
//     res.json(notes)
// })
router.post("/list/", async (req, res) => {
    let notes = await Note.find({
        userID: req.body.userID
    })
    res.json(notes)
})
//add
router.post("/add", async (req, res) => {
    //delete // repeat twbado yadanaba
    await Note.deleteOne({id : req.body.id})
    let newnotes = Note({
        id: req.body.id,
        userID: req.body.userID,
        title: req.body.title,
        content: req.body.content
    })
    await newnotes.save()
    let response = { message: "Note added successfully with " + req.body.id }
    res.json(response)
})

router.post("/delete", async (req, res) => {
    //delete
    await Note.deleteOne({id : req.body.id})
    let response = { message: "Note deleted successfully with " + req.body.id }
    res.json(response)
})

module.exports = router;