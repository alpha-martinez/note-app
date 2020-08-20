const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//need to be able to create and display folders
router.get('/', (req, res) => {
    const userId = req.user.dataValues.id
    db.user.findByPk(userId, {
        include: [{ model: db.folder }]
    }).then(user => {
        res.render('folder', { folders: user.folders})
    }).catch(err => {
        console.log(err, 'error')
    })
})

//GET route for notes
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    db.folder.findByPk(req.params.id, {
        include: { model: db.note }
    }).then(folder => {
        res.render('show', { folder: folder } )
    }).catch(err => {
        console.log(err, 'error')
    })
})

// //create
// router.post('/', (req, res) => {
//     db.folder.create ({
//         folderTitle: req.body.title
//     }).then (folder => {
//         res.render('folder', { folder })
//     }).catch(err => {
//         console.log(err, 'error')
//     })
// })

//EDIT

//need to be able to edit  folder
module.exports = router;
