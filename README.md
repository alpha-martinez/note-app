## Project Requirements

- Must have a login/sign up functionality, with hashed passwords and an authorization flow. 
- Have at least 2 models (not including the user model) that represents the functionality of your app. 
- have at least one third api 
- Have a complete RESTful routes for at least one of your resources (models) with GET, POST, PUT, and DELETE. 
- Include a readme file that explains your app.

## Technoligies I used for my app

* Sequelize user model / migration
* PostgreSQL
* Passport and passport-local for authentication
* CSS and HTML
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS Templating and EJS Layouts
* Text rich editor API

## What is my APP about?

I came up with a note app idea because I personally like to keep my notes organized in different folders so I know where I can go back to refer to them if I ever needed to. In my app, 
- a user should be able to sign up and create an account 
- a user should also be able to log in
- a user will first see a welcome page and then click on folders
- the user will then click on the desire folder they wish to look at and create a new note from there for that specific folder if needed/wanted
- the user can always go back to delete a note if they don't feel like they need it or they can go back and update their current note with more information.


## Installation

After forking and cloning into your own repo

1. Run npm install
2. Update congif.json to your desired database name
3. Run sequelize db:create
4. After ensuring you put the correct name in your config.json, run 
sequelize db:migrate
6. create a .env file to input your secret session = 'Any string value'
7. Run nodemon and open your browser to localhost:3000

## Blockers

1. Through my project, the one main aspect that kept getting my confuse was the routes. I had to remind myself how do the routes connect with my views and had to remind myself that whenever you had 

```javascript 
app.use('/notes', require('./routes/notes'));
```
The beginning already lets the app.get('/) know that before the slash you are in the notes and anything after it is what you want the page to get redirected or rendered to. However, I always kept getting myself confused

2. Another blocker was getting the folderId in my notes to get read properly. I had a one to many associations (my folder can have many notes) but when I had to create the associations in sequelize, it wouldn't get recognize and had to find other ways to get it recognized so I can use it in my database

##Future improvements/additions

1. Definitely want to continue working on the CSS aspect of this project. I definitely lack the createive side and my forms were giving me a hard time to fix and move, but I was able to push through. 
2. I also want to work on getting the API to work with my CSS. For some reason, whenever I change my CSS, it ruins my API since my API. This is definitely something I need to do more research in and see how I can fix this for moving forward.
3. I also want to add more to my app, in terms of what the user can do. I want to give them the option to move the file from one folder to another one if needed. I want to also allow them to change the name of the folder and adding an option to delete a folder. The reason why I did not add that was because since a folder can contain so many different notes, as a user myself, I wouldn't want to delete my folder unless I 100% have to. 