const express = require('express');
const app =  express();
const route = express.Router();
const bodyParser = require('body-parser');
const control = require('../../controller');
const URL = '/user';


// 挂载中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//设置路由
route.delete(URL, control.stystemUser)
route.put(URL, control.stystemUser)
route.post(URL, control.stystemUser)
route.get(URL, control.stystemUser)

module.exports = route
