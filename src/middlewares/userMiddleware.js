let userAdmin = ["Ada","Greta", "Vim", "Tim"];
const adminMiddlew = (req, res, next)=>{
if (userAdmin.includes(req.query.user)){
    next();
}else{
    res.send("no tiene privilegios para ingresar, rajá de aca!!!")
}
}

module.exports = adminMiddlew;