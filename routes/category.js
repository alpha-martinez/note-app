const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');

//POST /files - create a new file with content 

router.post('/', (req, res) => {
    db.category.findOrCreate({
        name: req.body.categoryName,
        userId: req.params.id
    }).then((post) => {
        res.redirect('/')
    }).catch((error) => {
        console.log(error, 'error')
    })
})


//GET /files/:id - display a specific file and its content 
router.get('/:id', (res, req) => {
    res.render('/')
})


//DELETE

//EDIT 

