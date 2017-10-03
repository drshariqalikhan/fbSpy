//express post data
//import modules
const ex =require('express');
const bp = require('body-parser');
var firstname;
var lastname;
var fbid;


//configure imports
const app = ex();
app.use(bp.urlencoded({extended: true}));
	
//display response
  app.post('/user',function(req,res){
var responseText = req.body.gender;
//display response
  res.json({
 "messages": [
   {"text": responseText },
   {"text": "" },
	   
 ]
});
});
