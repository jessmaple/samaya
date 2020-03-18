const db = require("../models")

module.exports = function (app) { 

    app.get("/api/tags", (req, res) => {
        db.tags.findAll({}).then(function(tags){
            res.json(tags)
        })
    })

    app.post("/api/tags",(req, res) => {
        console.log(req.body.tagName)
        db.tags.findOne(
        {   
            where: {
                tagName: req.body.tagName
            }
        }).then(function(obj){
            //If the tag doesn't exist in the table create one. 
            if(obj === null ){
                db.tags.create({
                    tagName: req.body.tagName, 
                    urlId: 1,
                    startTime: req.body.startTime, 
                    endTime: req.body.endTime
                }).then(function(data){
                    res.json(data)
                })
            } else {
                db.tags.update({
                    urlId: 1,
                    startTime: req.body.startTime, 
                    endTime: req.body.endTime},{
                         where: {tagName: req.body.tagName},
                    }
                ).then(function(data){
                    res.json(data)
                })
            }
        })
    })






}