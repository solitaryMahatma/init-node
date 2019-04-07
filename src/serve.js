
const express = require('express')
const app = express()
const user = require('./route/stystem')
const file = require('./route/file');
const formidableMiddleware = require('express-formidable');

// 声明变量
const STYSTEM = "/stystem"
const UP = '/up'

const connect = require('./connect')

connect()
// 跨域设置
/*app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);
    else next();
});*/

//挂载中间件
app.use(express.static(__dirname + '/static'))

app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir: "./static/upload",
    multiples: false,
}))

// 挂载路由
app.use(STYSTEM, user)
app.use(UP, file)

app.listen(3000);
