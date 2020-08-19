const db = require("./models");

// db.note.create({
//     title: 'Help',
//     summernote: 'Please work',
//     folderId: '1'
// }).then((notes) => {
//     console.log(notes.get())
// })


// db.folder.create({
//     folderTitle: 'Help notes',
//     userId: 6 
// }).then ((folders) => {
//     console.log(folders.get())
// })

db.user.findAll({
    include: [db.folder.userId],
    include: [db.note.folderId]
})
.then(folder=>{
    folder.forEach(folder=>{
        console.log(`${folder.folderName}:`)
        folder.notes.forEach(note=>{
            console.log(note.summernote)
        })
        console.log('-----------')
    })
})