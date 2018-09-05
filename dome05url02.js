/**
 * Created by 郭娜 on 2018/9/5.
 */

var Http = require("http");
var Url = require("url");

var Server = Http.createServer((req,res)=>{
    
    var Pathname = Url.parse(req.url).pathname;
    var Query = Url.parse(req.url,true).query;
    var num = Query.id;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(Pathname == "/favicon.ico"){
        return
    }
    
    if(Pathname == "/student" && num.length==3){
        res.end("学生编号"+num);
        
    }else  if(Pathname == "/teacher" && num.length==3){
        res.end("教师编号"+num);
    }else{
        res.end("此人不在编，请核对信息")
    }
}).listen(3000,"127.0.0.1")

