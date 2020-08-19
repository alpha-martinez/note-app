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
//     where: { userId: 6 }
// }).then ((folders) => {
//     console.log(folders.get())
// })

db.folder.findAll({
    include: [db.folder],
    include: [db.note]
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