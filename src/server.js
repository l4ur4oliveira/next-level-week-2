// SERVER
const express = require('express');
const server = express();
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSuccess
} = require('./pages');

const nunjucks = require('nunjucks');   // Config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server
.use(express.urlencoded({ extended : true}))    // Receber dados req.body
.use(express.static("public"))                  // Config arquivos estáticos (css, scripts, imagens)
.get("/", pageLanding)                          // Rotas da aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
.get("/success", pageSuccess)

.listen(5500);