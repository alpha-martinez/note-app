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
    })
    .then(user => {
        res.render('folder', { folders: user.folders })
    }).catch(err => {
        console.log('error', err)
    })
})
//need to findOrCreate
// router.post('/folders', (req, res) => {

// })
//need to be able to delete a folder



//need to be able to edit  folder
module.exports = router;
