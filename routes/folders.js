const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//need to be able to create and display folders
router.get('/', (req, res) => {
    const userId = req.user.dataValues.id
    db.folder.findOne(
        { where: userId, 
        include: [ db.note ] }
    )
    .then(folder => {
        console.log(folder)
        res.render('folder', { folder })
    }).catch(err => {
        console.log('error', err)
    })
})



//need to be able to edit  folder
module.exports = router;
