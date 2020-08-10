const Database = require('sqlite-async');
function execute(db) {
    // Cria tabelas do banco
    return db.exec(`
        INSERT INTO proffys (name, avatar, whatsapp, bio)
        VALUES
            ("Beyoncé Knowles-Carter", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Overall&clotheColor=PastelOrange&eyeType=Close&eyebrowType=UpDown&mouthType=Twinkle&skinColor=DarkBrown", "5551988776655", "Beyoncé Giselle Knowles-Carter é uma cantora, compositora e atriz norte-americana. Nascida e criada em Houston, no Texas, Beyoncé se tornou conhecida no ano de 1997, como uma das integrantes do grupo feminino de R&B Destiny's Child, que já vendeu mais de 50 milhões de discos mundialmente."),
            ("Taylor Swift", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Platinum&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Resist&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Pale", "5551988443322", "Taylor Alison Swift é uma cantora e compositora americana. Suas composições narrativas geralmente se concentram em sua vida pessoal e receberam elogios críticos e cobertura da mídia. Nascida em West Reading, Pensilvânia, Swift se mudou para Nashville, Tennessee, em 2004, para seguir uma carreira na música."),
            ("Michelle Obama", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=DarkBrown", "5551982441234", "Michelle LaVaughn Robinson Obama é uma advogada e escritora norte-americana. É a esposa do 44.º presidente dos Estados Unidos, Barack Obama, e a 46.ª primeira-dama dos Estados Unidos, sendo a primeira afro-descendente a ocupar o posto. Michelle Obama nasceu e cresceu em Chicago."),
            ("Katy Perry", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Overall&clotheColor=Blue03&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Pale", "5551982440000", "Katheryn Elizabeth Hudson (Santa Bárbara, 25 de outubro de 1984), conhecida pelo nome artístico Katy Perry, é uma cantora, compositora e atriz norte-americana. Filha de um casal de pastores evangélicos, começou sua carreira cantando em igrejas e chegou a lançar um álbum de estúdio de música gospel em 2001, intitulado Katy Hudson (mesmo nome artístico usado por ela na época), mas que teve suas vendas canceladas devido ao fechamento da Red Hill Records, gravadora responsável pela produção do álbum."),
            ("Laura de Oliveira", "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Tongue&skinColor=Light", "5551982440000", "Laura é programadora, mas no tempo livre se aventura no mundo do artesanato. Tem um vasto conhecimento em técnicas de crochê e, apesar de não ser consideranda formalmente uma Arte, possibilita o exercício da capacidade criatva perfeitamente bem.");
        
        INSERT INTO classes (subject, cost, proffy_id)
        VALUES
            (1, 1500.00, 1),
            (7, 600.00, 2),
            (3, 2000.00, 3),
            (2, 700.00, 4),
            (1, 300.00, 5);
        
        INSERT INTO class_schedule (class_id, weekday, time_to, time_from)
        VALUES
            (1, 1, 72000, 60000),
            (1, 5, 90000, 78000),
            (1, 3, 114000, 102000),
            (2, 2, 60000, 48000),
            (2, 4, 84000, 72000),
            (2, 6, 78000, 66000),
            (3, 5, 114000, 96000),
            (4, 0, 66000, 54000),
            (4, 6, 60000, 48000),
            (5, 1, 78000, 66000),
            (5, 2, 102000, 90000);
    `);
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
