const db = require("./models");

db.note.create({
    title: 'SHOW UP',
    summernote: 'HIIIII',
    folderId: '3'
}).then((notes) => {
    console.log(notes.get())
})


// db.folder.create({
//     folderTitle: 'Help notes',
//     userId: 6 
// }).then ((folders) => {
//     console.log(folders.get())
// })

// db.user.findAll( {
//     where: { id: 6 },
//     include: [db.folder]
//     // include: [db.note.folderId]
// })
// .then(users=>{
//   //  console.log(users[0])
//     users.forEach(user=>{
//         if(user.folders){
//             user.folders.forEach(folder => {
//             console.log(`${folder.folderTitle} and ${folder.userId}`)

//             })
//          }

//          //mutiplwe things will be in array 
//         // folder.notes.forEach(note=>{
//         //     console.log(note.summernote)
//         // })
//         // console.log('-----------')
//     })
// })



db.folder.findAll( {
    where: { id: 3 },
    include: [db.note]
    // include: [db.note.folderId]
})
.then(folders =>{
  console.log(`${folders.folderTitle}`)
    folders.forEach(folder=>{
        if(folder.notes){
            folder.notes.forEach(note => {
            console.log(`${note.title}: ${note.summernote}`)

            })
         }
    })
})