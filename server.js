const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
// Add here app.use statements
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//*** Routes
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/search", function (req, res) {
  const word = req.query.keyword;
  res.send(`<p>${word}</p>`);	
});

app.post("/register", function (req, res) {
  const user = req.body.username;
  const email = req.body.email;
  
  res.send(`
  	<h3>New user created.</h3>
  	<p>Username: ${user}</p>
	<p>Email: ${email}</p>
	`);
});

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});
