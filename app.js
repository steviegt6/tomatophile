// noinspection JSVoidFunctionReturnValueUsed

require("dotenv").config();

let express = require("express");
let app = express();

const port = process.env.port || 8080;

app.get("/", function (req, res) {
    res.send("This is a website")
});


// Route was not found, render 404 error page
app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/pages/404.html");
});

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
});


console.log(`Trying to bind on port ${port}...`);
app.listen(port, console.log(`Now listening on port ${port}. http://localhost:${port}`));