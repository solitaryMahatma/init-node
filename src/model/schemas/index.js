const yield = require('../../util/yield')
const mongoDB = require('../../mongoDB')

const stystem = {}
stystem.user = yield.yieldCreatObject(mongoDB.stystem.user.arr, mongoDB.stystem.user.obj)
exports.stystem = stystem