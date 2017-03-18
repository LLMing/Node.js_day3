/**
 * Created by llming on 2017/3/18.
 */
var http = require("http");
//这个语句,就在打开服务器的时候执行一次
var a = 100;

var server = http.createServer(function (req,res) {
    a++;
    res.end(a.toString());
});

server.listen(3000,"127.0.0.1");