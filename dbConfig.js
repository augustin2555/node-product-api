//FOR CONNECTING MONGODATABASE
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:MTY17ZehCeq6MUxY@cluster0.oyys1ne.mongodb.net/equp_rental?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error occured");
      console.log("Sorry we got error" + err);
    } else {
      console.log(" DB CONNECTED");
    }
  }
);
