// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
var Sequelize = require("sequelize");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  // Sets up the Express app to handle data parsing

  app.get("/",(req, res) => {
    db.tags.findAll({
   
    }).then(function(obj){
      let objArr = []
      let tagArr = []

      obj.forEach((ele)=>{
        if(!tagArr.includes(ele.dataValues.tagName)){
          tagArr.push(ele.dataValues.tagName)
          objArr.push({tagName: ele.dataValues.tagName})

        }
        
      })

      res.render("index",{tag: objArr});   
    })
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

      let objArr = []
      tag.forEach((ele)=>{
        objArr.push(ele.dataValues)
      })

      var embedUrl = "https://www.youtube.com/embed/"
      embedUrl = embedUrl + path[1];    
      res.render("add",{url: embedUrl, urlId: urlId,tag: objArr})})
    })
  })


  app.get("/results/:tagName", (req, res) => {
    db.tags.findAll({   
      where: {
        tagName : req.params.tagName
      }
    }).then(function(data){
      
      var nameList = []
      data.forEach((ele)=>{
        if(!nameList.includes(ele.dataValues.urlId)){
          nameList.push(ele.dataValues.urlId)
        }
      })

      db.videos.findAll({
        where:{
          id: nameList
        }
      }).then(function(data){
        var urlList = []
     
        data.forEach((ele)=>{
          var url = ele.dataValues.url;
          var vid = ele.dataValues.id; 

          if(!urlList.includes(url)){
            let refId = url.split("=")
            urlList.push({
              thumb:`https://img.youtube.com/vi/${refId[1]}/0.jpg`,
              id: `/add/${vid}`
            })
          }
        })
        console.log(urlList)
        res.render("results",{urls: urlList, tagName: req.params.tagName});   
      })
    })
  })

 




};
