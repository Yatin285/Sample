//var html=require('html');
var mysql=require('mysql');
var express=require('express');
var app=express();
app.set('view engine','ejs');
var con=mysql.createConnection({
host: "localhost",
user:"root",
password:"Yatin@2805",
database:"cats"
});
con.connect(function(err){
if(err) throw err;
console.log("Connected!");
con.query("SELECT * FROM catdata",function(err,result){
var str=result;
});
});
app.get('/',function(req,res){
  console.log('listening');
res.render('index',{s:str});
});
app.listen(3000);
