const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    
    let today = new Date(); 
        
    let options = {
        day: "numeric",
        weekday: "long",
        month: "long",
    };

    let day = today.toLocaleDateString("hi-IN", options);
    
    res.render("list", { kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    console.log(items);
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});