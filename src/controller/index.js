
const action = require('./action')
const model = require('../model');
const initOptions = require('./initOptions')

exports.stystemUser = async function (req, res, next) {
  const ask = req.method.toUpperCase() === "GET" ?req.query : req.fields
  const {userName} = ask
  const _o = [{userName}]
  const options = {
    method: req.method.toUpperCase(),
    model: model.stystem.user,
    condition: _o, //单一字段查询，验证某一字段值是否存在的条件
    postCondition: ask instanceof Array ? ask : [ask], // 插入一维数组对象的条件
    putCondition: _o, // 跟新数据的条件 [查询条件, 设置条件]
    getCondition: _o, // 获取数据的条件 [查询条件]
    deleteCondition: _o //删除数据条件 [删除条件]
  }
  Object.assign(options, initOptions)
  const response = await action(options)
  res.json(response)
  res.end()
}
