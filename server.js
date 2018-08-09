console.log("Vaslo");
var express = require("express");
var app=express();
///DECLARA VARIABLES
app.get("/",function(req,res){
    ///DATO QUE RECIBE EL NAVEGADOR
    res.send("Vaslo")});
///DEFINE LA RUTA
app.listen(3000,function(){console.log("funcione")});
///DEFINE QUE LA APP SE ENCIENDA EN EL PUERTO 3000
app.get("/hola",function(req,res){res.send("Vaslo2")});
app.listen(3000,function(){console.log("funcione")});

