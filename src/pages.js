const Database = require('./database/db');
const {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
} = require('./utils/format');

// FUNCIONALIDADES
function pageLanding(req, res) {
    return res.render("index.html");
};

async function pageStudy(req, res) {
    const filters = req.query;
    let queryString = "";

    if (!filters.subject || !filters.weekday || !filters.time) {
        
        // Retorna todos os proffys cadastrados
        queryString = `
            SELECT proffys.*, classes.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id);
        `;
        
    } else {
        
        // Converte horas em minutos
        const timeToMinutes = convertHoursToMinutes(filters.time);

        // Retorna os proffys que atendem ao filtro
        queryString = `
            SELECT proffys.*, classes.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE EXISTS(
                SELECT class_schedule.*
                FROM class_schedule
                WHERE class_schedule.class_id = classes.id
                AND class_schedule.weekday = ${filters.weekday}
                AND class_schedule.time_from <= ${timeToMinutes}
                AND class_schedule.time_to > ${timeToMinutes}
            )
            AND classes.subject = ${filters.subject};
        `;
    };

    // Caso haja erros na consulta do bd
    try {
        const db = await Database;
        const proffys = await db.all(queryString);

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject);
        });

        return res.render("study.html", {proffys, subjects, weekdays, filters});

    } catch (error) {
        console.log(error);
    }
};

function pageGiveClasses(req, res) {
    return res.render("give-classes.html", {subjects, weekdays});
};

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy');
    // const data = req.body;

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to: convertHoursToMinutes(req.body.time_to[index])
        }
    });

    try {
        const db = await Database;
        await createProffy(db, { proffyValue, classValue, classScheduleValues });

        let queryString = "?subject=" + req.body.subject;
        queryString += "&weekday=" + req.body.weekday[0];
        queryString += "&time=" + req.body.time_from[0];
        
        // return res.redirect("/study" + queryString);     // Reload na página com filtro aplicado
        return res.render("success.html", {queryString});   // Redireciona à página de feedback do cadastro

    } catch (error) {
        console.log(error);
    }
};

function pageSuccess(req, res) {
    return res.render("success.html");
};

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSuccess
}