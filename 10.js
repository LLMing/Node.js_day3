/**
 * Created by llming on 2017/3/18.
 */
var express = require("express");

var app = express();

//静态服务
app.use("/jingtai",express.static("./public"));

// app.use("/",function (req,res) {
//     res.send("haha");
// });

//404
app.use(function (req, res) {
        res.status(404).send("没有这个页面");
});

app.listen(3000);