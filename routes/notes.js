const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');
const folder = require('../models/folder');

//display your notes
router.get('/', (req, res)=>{
    db.note.findAll()
    .then(notes => {
      console.log(notes)
        //res.sendStatus(200)
        res.render('show', { notes: notes  })
        
    }).catch((err) => {
      console.log('Error', err)
    })
})

// router.post('/create', (req, res) => {
//   db.note.create({
//       title: req.body.title,
//       content: req.body.content,
//       folderId: req.body.folderId
//   }).then((notes) => {
//       res.redirect('show')
//   }).catch((error) => {
//       console.log(error, 'error')
//   })
// })


// //GET to display making a new note
// router.get('/note/show', (res,req) => {
//     db.note.findAll()
//     .then((notes) => {
//         console.log(notes)
//         res.redirect('note/show')
//     }).catch(error => {
//         console.log(error, 'error')
//     })
// })


//DELETE

//EDIT
  
module.exports = router;