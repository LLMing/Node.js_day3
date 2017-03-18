/**
 * Created by llming on 2017/3/18.
 */
/*
模板引擎的使用
 */
var express = require("express");

var app = express();

app.set("view engine","ejs");

app.get("/",function (req, res) {
    res.render("haha",{
        "news":["第一条新闻","第二条新闻","第三条新闻"]
    });
});

app.listen(3000);