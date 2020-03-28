const db = require("../models")

module.exports = function (app) { 

    app.post("/api/add",(req, res) => {
          db.videos.create({
              url: req.body.url
          }).then(function(data){
             res.json(data)
          }).catch(function (err) {
            if(err.original.code == 'ER_DUP_ENTRY'){
                db.videos.findOne(
                {   
                    where: {url: req.body.url}
                }).then((data)=>{
                    res.json(data)

                })
            }
        });
      })

    app.post("/api/tags",(req, res) => {
        console.log(req.body)
        db.tags.findOne(
        {   
            where: {tagName: req.body.tagName, 
                    urlId: req.body.urlId}
        }).then(function(obj){
            console.log(obj)
            if(obj === null ){
                db.tags.create({
                    tagName: req.body.tagName, 
                    urlId: req.body.urlId,
                    startTime: req.body.startTime, 
                    endTime: req.body.endTime
                }).then(function(data){
                    res.json(data)
                })

            } else {
                db.tags.update({
                    urlId: req.body.urlId,
                    startTime: req.body.urlId, 
                    endTime: req.body.endTime
                }).then(function(data){
                    res.json(data)
                })
            }
        }).catch(function (err) {
            console.log(err)

        });
    })
}