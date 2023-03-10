const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//CREATING INSTANCE OF EXPRESS MODULE
const app = express();

//ENABLING CORS
app.use(cors({}));

//MIDDLEWARE CONFIGURATION
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//IMPORTING EXPRESS APP FROM INDEX.JS
const expressApp = require("./index");
app.use("/", expressApp);

//DB CONFIGURATION
require("./dbConfig");

app.listen(4000);
