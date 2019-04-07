const stringToArray = options => {
    const ops = {
        data: '',
        reg: '',
        reverse: false
    }
    Object.assign(ops, options)
    /*if (ops.reverse) {
        if (!ops.data instanceof Array) return false
        return ops.data.join(ops.reg)
    } else {
        if (!typeof ops.data === 'string') return false
        return ops.data.split(ops.reg)
    }*/
    let o ;
    perform: {
        if (typeof ops.data === 'string') {
            o = ops.data.split(ops.reg)
            break perform;
        }
        if (ops.data instanceof Array){
            o = ops.data.join(ops.reg)
            break perform;
        }
        o = ops.data
        break perform;
    }
    return o


}

exports.stringToArray = stringToArray