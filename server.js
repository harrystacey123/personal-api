const
    express = require(`express`),
    app = express(),
    bodyParser = require(`body-parser`)

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(express.json())

    app.use(express.static(__dirname + `/public`));

    app.get(`/`, (req,res) => {
        res.sendFile(__dirname + `/views/index.html`);
    });

    app.listen(3000, () => {
        console.log(`Server running on http://localhost:3000`);
    });