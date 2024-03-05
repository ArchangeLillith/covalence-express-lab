const express = require("express");
const fs = require("fs");
const path = require("path");
let app = express();

//Root of the application
app.get("/", (req, res) => {
	res.send("Hello from the web server side...");
});

//Logger
app.use((req, res) => {
	console.log(req.url);
	next();
});

//Write from the form submission to the json
app.post("/submitdata", (req, res) => {
	fs.appendFileSync("formpost.json", `${req.body.name}\n`);
	next();
});

//Write from the form submission to the json
app.get("/formsubmissions", (req, res) => {
	const fileContent = fs.readFileSync(path.join(__dirname, "formpost.json"));
	res.send(fileContent);
});

//Static serve
app.use(express.static(path.join(__dirname, "../public")));

//Instantiate the server
app.listen(3000);
console.log("Listening on port 3000");
