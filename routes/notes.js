const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');
const folder = require('../models/folder');

router.get('/new/:id', (req, res) => {
  const folderID = req.params.id
  // need to find a new way to send folderID
  res.render('new', { folderID: folderID })
})

//POST new notes
router.post('/new', (req, res) => {
  console.log(req.body.summernote)
  let summernote = req.body.summernote
  summernote = summernote.slice(3, (summernote.length - 4))
  db.note.create({
  title: req.body.title,
  summernote: summernote,
  folderId: req.body.folderID
  }).then(() => {
    db.note.findAll({
        where: { folderId: req.body.folderID }
    }).then(notes => {
        res.render('show', { notes: notes })
    }).catch(err => {
        console.log(err, 'error')
    })
  }).catch((error) => {
    console.log(error)
  })
})

// GET/:ID
// router.get('/:id', async (req, res) => {
//   res.render('detail')

// });

//DELETE
// router.delete("/", async (req, res) => {
//     try {
//       await db.pokemon.destroy({
//         where: {
//           title: req.body.title,
//         },
//       });
//       res.redirect('show');
//     } catch (error) {
//       console.log("error");
//     }
//   });





//display your notes
// router.get('/show', (req, res)=>{
//     db.note.findAll()
//     .then(notes => {
//       console.log(notes)
//         res.sendStatus(200)
//         res.render('show', { notes: notes  })
        
//     }).catch((err) => {
//       console.log('Error', err)
//     })
// })

// //GET by :id to display one specific note
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