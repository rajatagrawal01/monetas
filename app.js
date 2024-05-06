const express = require("express");
const path = require("path");
var routes = require("./route/router");
const app = express();

const mongoose = require("mongoose");
var bodyParser = require('body-parser');


mongoose.connect("mongodb://localhost/monetas");
//new api
const flash = require('express-flash');




app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// Set public folder
app.use(express.static(path.join(__dirname,'/public')));
//app.use(express.static(path.join(__dirname, 'logo')));

app.use(flash())

app.use("/", routes);

const PORT = 3002;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));


