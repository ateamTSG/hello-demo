var express = require('express');
var app     = express();
 
app.get('/', function(req,res){
  res.send('Changes made');
});
 
var port = 3000;
app.listen(port,function(){
  console.log('Listening on port:' + port);
});
