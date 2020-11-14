//require("dotenv").config();
const express =  require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

require("./api-router.js")(app);
require("./html-router.js")(app);

app.listen(PORT, () => {
    console.log("Workout tracker app listening on port " + PORT);
});