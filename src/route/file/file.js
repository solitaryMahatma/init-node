const express = require('express');
let route = express.Router()
const action = require('./action')
const path = require('./path')
const util = require('../../util')

const getNewUrl = (filePath,fileName)=>{
    const type = path.extname(fileName)
    const base = path.dirname(filePath)
    const filename = util.now().custom + util.random({max:10000}) + type
    return path.join(base, filename)
}

route.post('/upImg', function (req, res, next) {
    const name = 'imgs'
    const file = req.files[name]
    const oldPath = path.normalize(file.path)
    const newPath = getNewUrl(file.path, file.name)
    action.rename(oldPath, newPath)
    res.json({ is: 'upImg' })
    res.end()

})

route.post('/upVideo', function (req, res, next) {
    res.send('upImg')
    res.end()
})


module.exports = route
