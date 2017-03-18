/**
 * Created by llming on 2017/3/18.
 */
/*
 app.use是一种很特殊的中间件,use匹配的网址,是模糊匹配,其后及时有子文件夹,依然能够执行
 */
var express = require("express");
var fs = require("fs");

var app = express();

//当你不写路径的时候,相当于"/",即所有网址
app.use(haha);

app.get("/admin",function (req, res) {
    res.send("管理员");
});

app.listen(3000);

function haha(req,res,next) {
    var filePath = req.originalUrl;
    //根据当前的网址,读取public文件夹中的文件
    //如果有这个文件,那么渲染这个文件
    //如果没有这个文件,那么next()
    fs.readFile("./public/"+filePath,function (err, data) {
        if(err){
            //文件不存在
            next();
            return;
        }
        res.send(data.toString());
    });
}