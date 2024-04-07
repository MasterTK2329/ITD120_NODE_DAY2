const express = require('express');
const app = express();
const port = 5000
app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(port, function(){
    console.log('sever is runing on part '+ port);
});