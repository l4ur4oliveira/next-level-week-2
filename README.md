# Next Level Week #2 :rocket:

Projeto desenvolvido durante a trilha **[Discovery](https://nextlevelweek.com/)** com as principais noções de HTML5, CSS3 e Javscript.

## Init

Instale as dependências com `npm install` e rode o servidor usando `npm run dev`.

Se tudo estiver ok com a instalação, a aplicação poderá ser acessada em `localhost:5500`.

## Roadmaps

- [Front-end](https://www.notion.so/Front-end-ab15ef64dbe7459aba38364cf60af9d2)
- [Back-end](https://www.notion.so/Back-end-4440c9aeda8c47d4856a8e4d4069e379)
- [Database](https://www.notion.so/Banco-de-Dados-c6b7589f7ca740979a746d9289ab71f6)

## Layout

- [Proffy Web](https://www.figma.com/file/ry0ZXLwQMyUezaR5eG1AHO/NLW2-Proffy-Web)
- [Proffy Mobile](https://www.figma.com/file/oh5lNN5V0PrUIU5LJtc36A/NLW2-Proffy-Mobile)

## Tools

- Figma
- Visula Studio Code
    - [Live Server Extension](https://github.com/ritwickdey/vscode-live-server)
    - [SQLite Extension](https://github.com/AlexCovizzi/vscode-sqlite)
- Google Chrome

## Dados

Com o arquivo `inserts.js` é possível inserir dados iniciais ao banco com a finalidade de agilizar o teste dos filtros.

```
node run src/databese/inserts.js
```

#### Guia de filtros

Utilize a tabela abaixo como guia para as consultas na página **Estudar**.

|  Matéria/Dias  |  Artes  |  Biologia  |  Ciências  |  História  |
|:--------------:|:-------:|:----------:|:----------:|:----------:|
|     Domingo    |         |   09h-10h  |            |            |
|     Segunda    | 10h-13h |            |            |            |
|     Terça      | 15h-17h |            |            |   08h-10h  |
|     Quarta     | 17h-19h |            |            |            |
|     Quinta     |         |            |            |   12h-14h  |
|     Sexta      | 13h-15h |            |   16h-19h  |            |
|     Sábado     |         |   08h-13h  |            |   11h-13h  |

## Project files structure

```
/public
   /images
   /scripts
      ..addField.js
      ..removeField.js
   /styles
     ..main.css
     /partials
        ..forms.css
        ..header.css
        ..page-give-classes.css
        ..page-landing.css
        ..page-study.css
        ..page-success.css
/src
   ..pages.js
   ..server.js
   /database
      ..createProffy.js
      ..db.js
      ..inserts.js
   /utils
      ..format.js
   /views
      ..give-classes.html
      ..index.html
      ..study.html
      ..success.html
```