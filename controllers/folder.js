const router = require("../routes/auth");
const db = require("../models");

router.get('/', (req,res) => {
    db.folder.findOrCreate({
        where: { userId: req.body.userId},
        defaults: {
            name: req.body.name
        }
    }).then(([folders, created]) => {
        if(created){
            console.log(`${folderName} was created`)
            res.redirect('/') //something needs to happen (needs to go somewhere)
            //you need params to go inside here since this is for URL and req.body is form data
        } else {
            console.log(`this doesn't work sucker`)
        }
    }) .catch(err => {
        console.log(err, 'sucker')
    })
    
})

//demonstrates

//