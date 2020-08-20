const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');
const folder = require('../models/folder');

//POST needs to be able to create a note
router.post('/create', (req, res) => {
    db.note.create({
        title: req.body.title,
        content: req.body.content,
        folderId: req.body.folderId
    }).then((notes) => {
        console.log(notes)
        res.redirect('show')
    }).catch((error) => {
        console.log(error, 'error')
    })
})


module.exports = router;