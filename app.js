// noinspection JSVoidFunctionReturnValueUsed

require("dotenv").config();

const express = require("express");
const app = express();
const favicon = require("serve-favicon");

const defaultPort = 8080;
const defaultHostname = "localhost";
const port = process.env.port || 8080;
const hostname = process.env.hostname || "localhost";
const faviconIco = __dirname + "/static/assets/favicon.ico";

console.log("resolved port: " + port + ", default: " + defaultPort);
console.log("resolved hostname: " + hostname + ", default: " + defaultHostname);

const extensions = ["html"];

console.log("using express status with extensions: " + extensions);
app.use(express.static("static", {extensions: extensions}));

console.log("serving favicon at location: " + faviconIco);
app.use(favicon(faviconIco));

// Route was not found, render 404 error page
app.use(function (req, res) {
    console.log("received 404 request: " + req.path);
    res.status(404).sendFile(__dirname + "/static/404.html");
});

app.use(function (err, req, res, next) {
    res.status(500).send("something broke, result contained 500 status");
});

console.log(`trying to bind on port ${port}...`);
app.listen(port, hostname, console.log(`now listening on port ${port}. http://${hostname}:${port}`));