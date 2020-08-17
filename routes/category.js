const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');
const { route } = require('./auth');
const { render } = require('ejs');

//POST /files - create a new file with content 

router.post('/', (req, res) => {
    db.notes.create({
        title: req.body.title,
        content: req.body.content,
        categoryId: req.params.id
    }).then((post) => {
        res.redirect(`/show/${req.params.id}`)
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



// render.post('/', (reqm res) => {
//     db.notes.findOrCreate({

//     })
// })


module.exports = router;