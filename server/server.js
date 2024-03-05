const express = require("express");
const fs = require("fs");
const path = require("path");
let app = express();

//Root of the application
app.get("/", (req, res) => {
	res.send("Hello from the web server side...");
});

//Static serve
app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);
console.log("Listening on port 3000");
