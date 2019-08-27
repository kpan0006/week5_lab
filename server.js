let express = require('express');
let app = express();

//set up the view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

var db =[];



app.use(express.static('img'));

var filePath = __dirname + "/views/";

app.get("/",function(req,res){
    let fileName = filePath + "index.html";
    res.sendfile(fileName);
});

app.get("/newtask",function(req,res){
    let fileName = filePath + "newTask.html";
    res.sendFile(fileName);
});

app.get("/listtasks",function(req,res){
    res.render("listTasks",{mytasks:db});
});

app.post("/listtasks",function(req,res){
    db.push(req.body);
    //first: HTML filename    second : my customers:propertyName, value is db, can be several properties
    //render before sending
    res.render("listTasks",{mytasks:db});

});



app.listen('8088',()=>{
    console.log('server started... ...');
})