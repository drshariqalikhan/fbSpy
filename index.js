//express post data
//import modules
const ex =require('express');
const bp = require('body-parser');


//configure imports
const app = ex();
app.use(bp.urlencoded({extended: true}));

app.post('/user',function(req,res){
	console.log(req.body.name); 
	//res.send('done!');
	//console.log('done!');
	});
