//npm i express body-parser ejs mysql2
const port = 7777;
const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "./views"));

app.get('/', (req, res) => {
    res.render("index", {});
})

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});
