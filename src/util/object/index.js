const isEmptyObject = obj => {
    let _f = false
    initType: {
        if (typeof obj !== 'object') break initType;
        if (obj instanceof Array) break initType;
        if (!Object.keys(obj).length) break initType;
        _f = true
    }
    return _f
}

exports.isEmptyObject = isEmptyObject