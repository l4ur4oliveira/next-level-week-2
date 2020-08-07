// DADOS
const proffys = [
    {
        name: "Beyoncé Knowles-Carter",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Overall&clotheColor=PastelOrange&eyeType=Close&eyebrowType=UpDown&mouthType=Twinkle&skinColor=DarkBrown",
        whatsapp: "5551988776655",
        bio: "Beyoncé Giselle Knowles-Carter é uma cantora, compositora e atriz norte-americana. Nascida e criada em Houston, no Texas, Beyoncé se tornou conhecida no ano de 1997, como uma das integrantes do grupo feminino de R&B Destiny's Child, que já vendeu mais de 50 milhões de discos mundialmente.",
        subject: "Artes",
        cost: "1500.00",
        weekday: "[0]",
        time_from: "[750]",
        time_to: "[1500]"
    },
    {
        name: "Taylor Swift",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Platinum&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Resist&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Pale",
        whatsapp: "5551988443322",
        bio: "Taylor Alison Swift é uma cantora e compositora americana. Suas composições narrativas geralmente se concentram em sua vida pessoal e receberam elogios críticos e cobertura da mídia. Nascida em West Reading, Pensilvânia, Swift se mudou para Nashville, Tennessee, em 2004, para seguir uma carreira na música.",
        subject: "História",
        cost: "500.00",
        weekday: "[3]",
        time_from: "[750]",
        time_to: "[1500]"
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

// FUNCIONALIDADES
function getSubject(subjectNumber) {
    const position = +subjectNumber -1; // Expressão retorna número da matéria -1
    return subjects[position];
};

function pageLanding(req, res) {
    return res.render("index.html");
};

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {proffys, subjects, weekdays, filters});
};

function pageGiveClasses(req, res) {
    const data = req.query;
    const isEmpty = Object.keys(data).length == 0; // Verifica se está vazio

    // Se há dados
    if (!isEmpty) {
        // Altera o número da matéria pelo nome
        data.subject = getSubject(data.subject);

        // Add na lista de Proffys
        proffys.push(data);

        return res.redirect("/study");
    } 
    
    // Se não houver dados
    return res.render("give-classes.html", {subjects, weekdays});
};

// SERVER
const express = require('express');
const server = express();

const nunjucks = require('nunjucks');   // Config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server
.use(express.static("public"))  // Config arquivos estáticos (css, scripts, imagens)
.get("/", pageLanding)          // Rotas da aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500);