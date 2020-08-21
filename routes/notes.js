const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');
const folder = require('../models/folder');

router.get('/new/:id', (req, res) => {
  const folderID = req.params.id
  res.render('new', { folderID: folderID })
})

//POST new notes
router.post('/new', (req, res) => {
  //console.log(req.body.summernote)
  let summernote = req.body.summernote
  db.note.create({
  title: req.body.title,
  summernote: summernote,
  folderId: req.body.folderID
  }).then((note) => {
    res.redirect(`/folders/${req.body.folderID}`)
  }).catch((error) => {
    console.log(error)
  })
})

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  console.log('💩')
  console.log(req.body.summernote)
    db.note.findByPk(req.params.id)
    .then(note => {
      note.summernote = req.body.summernote
      note.save()
      res.redirect(`/folders/${note.folderId}`)
    })
    .catch(err => {
      console.log(err, 'error')
    })
   
})
//GET/:ID
router.get('/:id', async (req, res) => {
  db.note.findByPk(req.params.id)
  .then(note => {
    res.render('detail', { note: note })
  })

});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await db.note.destroy({
        where: {
          title: req.body.title,
        },
      });
      res.redirect(`/folders/${note.folderId}`);
    } catch (error) {
      console.log("error");
    }
  });


//EDIT
  
module.exports = router;