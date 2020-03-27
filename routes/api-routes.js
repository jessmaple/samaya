const db = require("../models")

module.exports = function (app) { 

    app.get("/api/tags", (req, res) => {
        db.tags.findAll({}).then(function(tags){
            res.json(tags)
        })
    })

    app.post("/api/tags", (req, res) => {
        db.tags.create(req.body).then(function(allTags){
            res.json(allTags)
        })
    })

    app.get("/", (req, res) => {
        res.render("index")
    })
}