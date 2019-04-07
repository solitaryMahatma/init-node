const nullVal = require('./null')
const array = require('./array')
const time = require('./time')
const padding = require('./padding')
const math = require('./math')
const string = require('./string')
const gem = require('./yield')
const object = require('./object')

const util = {}
Object.assign(util, nullVal)
Object.assign(util, array)
Object.assign(util, time)
Object.assign(util, padding)
Object.assign(util, math)
Object.assign(util, string)
Object.assign(util, gem)
Object.assign(util, object)

module.exports = util