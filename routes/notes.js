const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');
const folder = require('../models/folder');

//POST new notes
router.post('/new', (req, res) => {
  db.note.create({
  title: req.body.title,
  summernote: req.body.summernote,
  folderId: req.body.folderId
  }).then((post) => {
    res.redirect('/show')
  }).catch((error) => {
    console.log(error, 'error')
  })
})

//display your notes
router.get('/show', (req, res)=>{
    db.note.findAll()
    .then(notes => {
      console.log(notes)
        //res.sendStatus(200)
        res.render('show', { notes: notes  })
        
    }).catch((err) => {
      console.log('Error', err)
    })
})

//GET by :id to display one specific note
// router.get('/:id', (req, res) => {
//   db.note.findOne({
//     where: { id: req.params.id }
//   }).then((note) => {
//     res.render('/', { note: note })
//   }).catch((error) => {
//     console.log(error, 'error')
//   })
// })








//DELETE

//EDIT
  
module.exports = router;