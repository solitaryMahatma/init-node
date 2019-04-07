const initArrayToObject = arr => {
    const _o = {}
    leng0: {
        if (!arr.length) break leng0;
        const p = gen.yield(arr)
        for (let index = 0; index < arr.length; index++) _o[p.next().value] = null
    }
    return _o
}

exports.initArrayToObject = initArrayToObject