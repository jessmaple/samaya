// Requiring necessary npm packages
const express = require("express");
// Requiring passport as we've configured it
const expressHandlebars = require("express-handlebars")

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine" , "handlebars")

// Requiring our routes
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);

    console.log(db.Tags.findAll({}))
  });
});
