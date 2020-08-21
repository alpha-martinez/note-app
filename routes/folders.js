const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//need to be able to display folders
router.get('/', (req, res) => {
    const userId = req.user.dataValues.id
    db.user.findByPk(userId, {
        include: [{ model: db.folder }]
    }).then(user => {
        console.log(user)
        res.render('folder', { folders: user.folders})
    }).catch(err => {
        console.log(err, 'error')
    })
})

router.get('/form', (req, res) => {
    console.log('🥺')
    res.render('form')
})

//GET route for notes
router.get('/:id', (req, res) => {
    //console.log('🎭',req.params.id)
    db.folder.findByPk(req.params.id, {
        include: { model: db.note }
    }).then(folder => {
        //console.log('💩',folder)
        res.render('show', { folder: folder } )
    }).catch(err => {
        console.log(err, 'error')
    })
})



//POST route to create a new folder
router.post('/form', (req, res) => {
    db.folder.create({
        userId: req.user.dataValues.id,
        folderTitle: req.body.folderTitle
    }).then((folderTitle) => {
        res.redirect(`/folders/${folderTitle.id}`)
    }).catch(err => {
        console.log(err, 'coool story bro')
    })
  });

  //CRUD --> (Create Update OR Delete)should never render but redirect

//delete a folder

module.exports = router;
