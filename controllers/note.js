const db = require('../models');
const express = require('express');
const router = express.Router();


//Post /notes - create a new note

router.post('/', (req, res) => {
    db.note.create({
        title: req.body.title,
        summernote: req.body.summernote, 
        folderId: req.body.folderId

    }).then((notes) => {
        console.log(notes)
        res.redirect('/show')
    }).catch((error) => {
        console.log(error, 'error')
    })

})

//GET to display making a new note

router.get('/', (res,req) => {
    db.note.findAll()
    .then((notes) => {
        console.log(notes)
        res.render('/show', { notes: notes })
    }).catch(error => {
        console.log(error, 'error')
    })
})

module.exports = router