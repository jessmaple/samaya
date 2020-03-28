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
 
  	var st = 0
  	var et = 0

	app.get("/results", (req,res) => {
		db.tags.findAll({}).then(function(obj){
			let objArr = []
			let startEnd = ''
			if(et !== 0){
				startEnd = `?autoplay=1&mute=1&start=${st}&end=${et}`
			}
			obj.forEach((ele)=>{
				objArr.push(ele.dataValues)
			})
			res.render("results",{ 
				tag: objArr,
			 	param: startEnd, 
			});   
		})
	})

  app.get("/",(req, res) => {
    res.render("index",{}); 
  })

  app.get("/add/:id", function(req, res,next ) {
    let urlId = req.params.id; 
    let path; 

    db.videos.findOne(
    {   
      where: {
        id: urlId
      }
    }).then(function(obj){
    
      path = obj.dataValues.url.split("=")
      db.tags.findAll({
          where: {urlId:urlId }
      }).then((tag)=>{
        console.log(tag)
        var embedUrl = "https://www.youtube.com/embed/"
        embedUrl = embedUrl + path[1];    
        res.render("add",{url: embedUrl, urlId: urlId})})
    })
  })

  app.put("/results", (req, res) => {
    db.tags.findOne(
    {   
        where: {
            tagName: req.body.id
        }
    }).then(function(obj){   	 
        if(obj !== null){
        	st = obj.dataValues.startTime
        	et = obj.dataValues.endTime
          	res.render("results",{});   
        }
    })
  })
};
