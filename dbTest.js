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

db.user.findAll( {
    where: { id: 6 },
    include: [db.folder]
    // include: [db.note.folderId]
})
.then(users=>{
  //  console.log(users[0])
    users.forEach(user=>{
        if(user.folders){
            user.folders.forEach(folder => {
            console.log(`${folder.folderTitle} and ${folder.userId}`)

            })
         }

         //mutiplwe things will be in array 
        // folder.notes.forEach(note=>{
        //     console.log(note.summernote)
        // })
        // console.log('-----------')
    })
})