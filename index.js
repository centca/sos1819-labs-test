var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 8080;




app.get("/", (req, res)=>{
    
    
    res.send("Hola");    
   res.sendStatus(200); 
    
});

app.listen(port, () => {

    console.log("Super server ready on port " + port);
});