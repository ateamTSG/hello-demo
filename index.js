var express = require('express');
var app     = express();
 
app.get('/', function(req,res){
  res.send('This is a demonstration of full CI/CD using Azure Devops & ARO - © A-Team TSG');
});
 
var port = 3000;
app.listen(port,function(){
  console.log('Listening on port:' + port);
});
