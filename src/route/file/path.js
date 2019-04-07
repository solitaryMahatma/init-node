const path = require('path')

const win32 = path.win32


const basename = (url, ect) => { /// 方法返回 path 的最后一部分
    let str 
    if (condition) {
        str = win32.basename(url, ect)
    } else {
        str = win32.basename(url)
    }
    return str
}

const dirname = url => win32.dirname(url) // 方法返回 path 的目录名

const extname = url => win32.extname (url)//方法返回 path 的扩展名， 从最后一次出现.（句点） 字符到 path 最后一部分的字符串结束
const join = (...arg) => win32.join(...arg)
const format = pathObject => win32.format(pathObject)
const isAbsolute = url => win32.isAbsolute(url)
const normalize = url => win32.normalize(url)
const parse = url => win32.parse(url)
const resolve = (from, to) => win32.resolve(from, to) // 定位to到哪个目录

exports.normalize = normalize
exports.basename = basename
exports.dirname = dirname
exports.extname = extname
exports.join = join