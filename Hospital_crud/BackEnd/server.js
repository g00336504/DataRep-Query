var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
/*-----Here is where i have connected to my Database is being sent to my Mlab database----- */
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:Luissuarez7@ds055812.mlab.com:55812/mongo_db';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    content: String,
    reference: String,
    DOB: String,
    Doctor: String,
    Diagnosis: String
})
var PostModel = mongoose.model('post', postSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    


app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.reference);
    console.log(req.body.DOB);
    console.log(req.body.Doctor);
    console.log(req.body.Diagnosis);

    PostModel.create({
        title: req.body.title,
        content: req.body.content,
        reference: req.body.reference,
        DOB: req.body.DOB,
        Doctor: req.body.Doctor,
        Diagnosis: req.body.Diagnosis
    });
    res.send('Item added');


})

app.get('/api/posts', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/posts/:id', function(req, res){
    console.log("Read post " +req.params.id);

    //PostModel.find({_id : req.params.id}, 
    PostModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/posts/:id', function(req, res){
    console.log("Update Post" +req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.reference);
    console.log(req.body.DOB);
    console.log(req.body.Doctor);
    console.log(req.body.Diagnosis);

    PostModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    PostModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})