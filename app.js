const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
var item = [];
//const ejsLint = require('ejs-lint');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}))
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  var date = new Date();
  var options = {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric'
  };
  var day = date.toLocaleDateString('en-Us',options);
  res.render("list", {todaysDay : day, filler : item});
})

app.post("/toDoForm", (req, res) => {
  //console.log(req);
  item.push(req.body.itemName);

  //res.render("list", {  });
  res.redirect("/");
})

app.listen(3000, () =>  {
  console.log("Listening to port 3000");
})
