const express = require('express');
const app = express();
const bp = require('body-parser');
app.set('port', (process.env.PORT || 5000));
app.use(bp.urlencoded({extended: true}));


//handle post req

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

//start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
