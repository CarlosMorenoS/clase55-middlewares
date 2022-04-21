const res = require("express/lib/response")

module.exports = {
    index: (req,res)=>{
res.render('index')
    },
    admin :(req, res) => {
        res.render('admin', {
            admin: req.query.user
        })
    }
}