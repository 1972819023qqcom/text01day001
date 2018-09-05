/**
 * Created by 郭娜 on 2018/9/5.
 */

var Http = require("http");
var Url = require("url");
Http.createServer((req,res)=>{
    //url.pares()
    var pathname=Url.parse(req.url).pathname;
    //http://localhost:3300/index?dongeage=20&name=hell
    //pathname  /后面的
    //query ?后面
    //var query = Url.parse(req.url).query;
    var query = Url.parse(req.url,true).query;
    //query是如果第二个参数传为true 就会转化为对象
    console.log(query);
    res.end("url请求结束")
}).listen(3300,"127.0.0.1")

