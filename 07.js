/**
 * Created by llming on 2017/3/18.
 */

var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/admin/login", function (req, res) {
    console.log("2");
    res.send("管理员登录");
});

app.get("/:username/:id", function (req, res) {
    console.log("1");
    res.send("用户信息");
});

app.listen(3000);