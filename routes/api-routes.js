const db = require("../models")

module.exports = function (app) { 


    app.post("/api/add",(req, res) => {
          db.videos.create({
              url: req.body.url
          }).then(function(data){
             res.json(data)
          })
      })

    app.post("/api/tags",(req, res) => {

        db.tags.findOne(
        {   
            where: {tagName: req.body.tagName, 
                    urlId: req.body.urlId}           
                
        }).then(function(obj){
            if(obj === null ){
                db.tags.create({
                    tagName: req.body.tagName, 
                    urlId: req.body.urlId,
                    startTime: req.body.startTime, 
                    endTime: req.body.endTime,
                }).then(function(data){
                    res.json(data)
                })

            } else {
                db.tags.update({
                urlId: req.body.urlId,
                startTime: req.body.urlId, 
                endTime: req.body.endTime},{
                     where: {tagName: req.body.tagName},
                }
                ).then(function(data){
                    res.json(data)
                })

            }
    
            
        }).catch(function (err) {
            console.log(err)

        });
    })

    
}