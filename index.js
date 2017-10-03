const express = require('express');
const app = express();
const bp = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(bp.urlencoded({extended: true}));


//handle post req

app.post('/user',function(req,res){
var firstName= req.body["first name"];
var lastName= req.body["last name"];
var profilePic= req.body["profile pic url"];
var locale=req.body["locale"];
var timezone= req.body["timezone"];
var gender= req.body["gender"];
var messengerSessionId= req.body["chatfuel user id"];
var facebookPageId= req.body["messenger user id"];
//display response
  res.json({
 "messages": [
   {"text": firstName },{"text": lastName },
   {"text": locale},
	   
 ]
});
});

//start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
