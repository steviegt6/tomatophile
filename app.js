// noinspection JSVoidFunctionReturnValueUsed

require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.port || 8080;
const hostname = process.env.hostname || "localhost";

app.use(express.static("static", {extensions: ["html"]}));

// Route was not found, render 404 error page
app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/static/404.html");
});

app.use(function (err, req, res, next) {
    res.status(500).send("Something broke!");
});

console.log(`Trying to bind on port ${port}...`);
app.listen(port, hostname, console.log(`Now listening on port ${port}. http://${hostname}:${port}`));