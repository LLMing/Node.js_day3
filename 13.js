/**
 * Created by llming on 2017/3/18.
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine","ejs");

//req.query获得get请求的参数
app.get("/",function (req, res) {
    res.render("form");
});

//这句是获取post请求必须要的
app.use(bodyParser.urlencoded({extended : false}));

app.post("/",function (req,res) {
    console.log(req.body);
    res.end("haha");
});

app.listen(3000);
