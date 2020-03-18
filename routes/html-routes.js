// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  // Sets up the Express app to handle data parsing
 

	app.get("/", (req,res) => {
		res.render("index",{  });   
	})
	
};
