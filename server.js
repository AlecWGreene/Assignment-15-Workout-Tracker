require("dotenv").config();
const express =  require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./api-router.js")(app);
require("./html-router.js")(app);
