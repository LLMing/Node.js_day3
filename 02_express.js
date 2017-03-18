/**
 * Created by llming on 2017/3/18.
 */

var express = require("express");

var app = express();

//调用中间键实现静态服务
app.use(express.static("./public"));

app.get("/haha",function (req, res) {
    res.send("haha");
});
app.listen(3000);