const fs = require ('fs');
const LogMiddleware = (req, res, next)=> {
let texto = "El usuario ingresó a la ruta:" + req.url + "\n";
fs.appendFileSync("src/logs/userlogs.txt", texto);
next();
};

module.exports = LogMiddleware;
