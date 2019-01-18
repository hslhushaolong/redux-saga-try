var express=require('express');
var app =express();
// var bodyParse = require('body-parse');
// app.use(bodyParser());
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});
//写个接口123
app.post('/123',function(req,res){
    console.log(res, res);
    res.status(200),
    res.json([{name: 1212}])
});
app.listen(3000);
console.log("server is runing at l古古怪怪gggggggggggggggfdddfdfdcvcxcvcxcxcxzxzxcvbnm，ocalhost:3000");


