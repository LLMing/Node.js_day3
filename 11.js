/**
 * Created by llming on 2017/3/18.
 */
var express = require("express");

var app = express();

//模板引擎默认放在views文件夹中,也可以使用下面的命令更改文件夹
//app.set("views","a");
app.set("view engine","ejs");

//模板引擎用res.render渲染
app.get("/",function (req, res) {
    res.render("haha",{news:[]});
});

app.get("/check",function (req, res) {
    res.send({
       "user" : "OK"
    });
});

app.listen(3000);

