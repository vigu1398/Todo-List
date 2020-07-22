const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var newItem = "";
var listOfItems = ["Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response)
{
    var today = new Date();
    var options = {weekday: "long", day: "numeric", month: "long"};
    var day = today.toLocaleDateString("en-US", options);

    response.render("list", {kindOfDay: day, newListItem: listOfItems});

});

app.post("/", function(request, response)
{
    newItem = request.body.newItem;
    listOfItems.push(newItem);
    console.log(newItem);
    response.redirect("/");

});

app.listen(3000, function()
{
    console.log("Server started at 3000");
});
