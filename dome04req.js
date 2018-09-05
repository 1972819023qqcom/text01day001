/**
 * Created by 郭娜 on 2018/9/5.
 */
var http = require("http");
var url = require("url");

http.createServer((req,res)=>{

    var query = url.parse(req.url,true).query;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    console.log(query.username);
    console.log(query.password);

    res.end("账号："+query.username+"密码："+query.username);

}).listen(3030,"127.0.0.1")



