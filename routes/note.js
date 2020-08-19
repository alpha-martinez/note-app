const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');


router.post('/', (req, res) => {
    db.note.create({
        title: req.body.title,
        content: req.body.content,
        folderId: req.body.folderId
    }).then((notes) => {
        console.log(notes)
        res.render('/show')
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

  
module.exports = router;