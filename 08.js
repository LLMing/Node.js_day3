/**
 * Created by llming on 2017/3/18.
 */
/*
app.use是一种很特殊的中间件,use匹配的网址,是模糊匹配,其后及时有子文件夹,依然能够执行
 */
var express = require("express");

var app = express();

//当你不写路径的时候,相当于"/",即所有网址
app.use(function (req, res,next) {
    console.log(new Date()+"");
    next();
});

app.get("/admin",function (req, res) {
    res.write(req.originalUrl+"\n");// /admin/login/123
    res.write(req.baseUrl+"\n");// /admin
    res.write(req.path+"\n");// /login/123
    res.end("你好");
});

app.listen(3000);
