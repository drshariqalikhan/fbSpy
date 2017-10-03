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

app.post('/user',function(req,res){
firstname=req.body.gender;
	
//display response
  response.json({
 "messages": [
   {"text": firstname },
   {"text": "--" },
	   
 ]
});	
});
