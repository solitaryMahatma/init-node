const string = require('../string')

const paddingZero = options => {
    const ops = {
        max: '99',
        min: '0'
    }
    Object.assign(ops, options)
    const maxLen = string.stringToArray({
        data: ops.max
    }).length
    const minlen = string.stringToArray({
        data: ops.min
    }).length
    const difference = maxLen - minlen
    let _str = ''
    if (difference) {
        const arr = []
        for (let index = 0; index < difference; index++) {
            arr.push('0')
        }
        _str = string.stringToArray({
            data: arr,
            reverse: true
        })
    }
    return _str + ops.min

}

exports.paddingZero = paddingZero