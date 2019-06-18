# Imagin-a-burger
https://imagin-a-burger.herokuapp.com/

Creative burger logger with MySQL, Node, Express, Handlebars and a homemade ORM

## App Setup
Created a GitHub repo called burger and cloned it to computer.

Made a package.json file by running npm init from the command line.

Installed the Express npm package: npm install express.

Created a server.js file.

Installed the Handlebars npm package: npm install express-handlebars.

Installed MySQL npm package: npm install mysql.

Required the following npm packages inside of the server.js file:

express

## DB Setup
Inside the burger directory, created a folder named db.

In the db folder, created a file named schema.sql. Wrote SQL queries to this file that do the following:

Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:
id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.

Created a seeds.sql file. In this file, inserted queries to populate the burgers table with at least three entries.

## Config Setup
Inside your burger directory, created a folder named config.

Created a connection.js file inside config directory.

Inside the connection.js file, setup the code to connect Node to MySQL.

Exported the connection.

Created an orm.js file inside config directory.

Imported (required) connection.js into orm.js

In the orm.js file, created the methods that will execute the necessary MySQL commands in the controllers. These are the methods needed to use in order to retrieve and store data in the database.

selectAll()
insertOne()
updateOne()
Exported the ORM object in module.exports.

## Model setup
Inside your burger directory, created a folder named models.

In models, made a burger.js file.

Inside burger.js, imported orm.js into burger.js

Also inside burger.js, created the code that will call the ORM functions using burger specific input for the ORM.

Exported at the end of the burger.js file.

## Controller setup
Inside the burger directory, created a folder named controllers.

In controllers, created the burgers_controller.js file.

Inside the burgers_controller.js file, imported the following:

Express
burger.js

Created the router for the app, and exported the router at the end of the file.

## View setup
Inside the burger directory, created a folder named views.

Created the index.handlebars file inside views directory.

Created the layouts directory inside views directory.

Created the main.handlebars file inside layouts directory.

Setup the main.handlebars file so it's able to be used by Handlebars.

Setup the index.handlebars to have the template that Handlebars can render onto.

Created a button in index.handlebars that will submit the user input into the database.

## Directory structure
All the files and directories from the steps above look like the following structure:

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
