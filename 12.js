/**
 * Created by llming on 2017/3/18.
 */
var express = require("express");

var app = express();

//req.query获得get请求的参数
app.get("/",function (req, res) {
    res.render("form");
});

app.listen(3000);
