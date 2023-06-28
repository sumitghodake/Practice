var exp=require('express')
var app=exp();
var bodyParser=require('body-parser');

app.get('/login',function(req,res){
    res.sendFile(__dirname+"/loginfrom.html");
})


app.get('/logincheck', function(req,res){
   

	if(req.query.UID=="object" && req.query.pwd=="knowit123")
	    res.send(" successful login");
	else
	    res.send("Login failed"); 
})
// app.post('/logincheck', function(req,res){
   

// 	if(req.body.uid=="object" && req.body.pwd=="knowit123")
// 	    res.send(" successful login");
// 	else
// 	    res.send("Login failed"); 
// })


 app.all('*',function(req,res){
    res.send("Invalid url");
 })

  app.listen(4000,function(){
    console.log("Server gets started");
 });
