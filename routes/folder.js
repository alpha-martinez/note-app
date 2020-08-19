const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//need to be able to create and display folders
router.get('/', (req, res) => {
    db.folder.findAll({
        where: { userId: req.user.id }
    })
    .then(folders => {
        console.log(folders)
        res.render('profile', { folders })
    }).catch(err => {
        console.log('error', err)
    })
})


//need to be able to delete a folder



//need to be able to edit  folder