var exp=require('express')
var app=exp();
var bodyParser=require('body-parser');

app.use(exp.static('images'));

app.get('/login1',function(req,res){
    res.sendFile(__dirname+"/loginfrom2.html");
})


app.get('/logincheck1', function(req,res){
   
       if(req.query.UID=="object" && req.query.pwd=="knowit123")
	        res.send(" successful login");
	   else
	    res.send("Login failed"); 
});
// app.post('/logincheck', function(req,res){
   

// 	if(req.body.uid=="object" && req.body.pwd=="knowit123")
// 	    res.send(" successful login");
// 	else
// 	    res.send("Login failed"); 
// })


 app.all('*',function(req,res){
    res.send("Invalid url");
 })

  app.listen(8000,function(){
    console.log("Server gets started");
 });
