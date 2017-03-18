/**
 * Created by llming on 2017/3/18.
 */
var express = require("express");
var app = express();

//忽略大小写
app.get("/AAb",function (req, res) {
    res.send("不错哦");
});

// 冒号
app.get("/student/:id",function (req, res) {
    //以下的两个方法都是可以的
    var id1 = req.params["id"];
    //var id2 = req.params.id;
    var reg = /^[\d]{6}$/;
    if(reg.test(id1)){
        res.send(id1);
    }else{
        res.send("请检查格式");
    }
});

//多个冒号
app.get("/:username/:oid",function (req, res) {
    var username = req.params["username"];
    var oid = req.params["oid"];
    res.write(username);
    res.end(oid);
});

app.listen(3000);