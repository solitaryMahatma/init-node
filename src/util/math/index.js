const padding = require('../padding')

const random = options => {
    const ops = {
        min: 0,
        max: 100000,
        isString: true,
        isPadding: true
    }
    Object.assign(ops, options)
    const num = ops.min + Math.round((Math.random()) * (ops.max - ops.min))
    let _str;
    if (ops.isString && ops.isPadding) {
        // 补零
        _str = padding.paddingZero({
            max: '' + ops.max,
            min: '' + num
        })
    } else if (ops.isString && !ops.isPadding) {
        // 不补零
        _str = '' + num
    } else {
        _str = num 
    }
    return _str

}



exports.random = random