const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//show my create a note page
router.get('/create', (req, res) => {
    res.render('note/create')
})

router.get('/show', (req, res) => {
    res.render('note/show')
})

//POST needs to be able to create a note
router.post('/note/create', (req, res) => {
    db.note.create({
        title: req.body.title,
        content: req.body.content,
        folderId: req.body.folderId
    }).then((notes) => {
        console.log(notes)
        res.redirect('note/show')
    }).catch((error) => {
        console.log(error, 'error')
    })
})

//GET to display making a new note
router.get('/', (res,req) => {
    db.note.findAll()
    .then((notes) => {
        console.log(notes)
        res.render('note/show', { notes: notes })
    }).catch(error => {
        console.log(error, 'error')
    })
})


//DELETE

//EDIT
  
module.exports = router;