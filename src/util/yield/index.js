const yield = function* (arr){
    yield* arr
}

const yieldCreatObject = (arr,obj) => {
    const _o = {}
    const object = obj || {}
    perform: {
        if (!(arr instanceof Array)) break perform;
        const len = arr.length
        if (!len) break perform;
        const p = yield(arr)
        checkj: for (let index = 0; index < arr.length; index++) {
            let _w = p.next().value
            for (const key in object) {
                /*if (object.hasOwnProperty(key)) {
                    const element = object[key];
                    
                }*/
                if (_w === key) {
                    _o[_w] = {}
                    object[key] = object[key].toUpperCase()
                    if (object[key] == 'DATE') {
                        _o[_w]['type'] = Date
                        _o[_w]['default'] = Date.now()
                    }
                    if (object[key] == 'NUMBER') {
                        _o[_w]['type'] = Number
                        _o[_w]['default'] = 0
                    }
                    if (object[key] == 'BOOLEAN') {
                        _o[_w]['type'] = Boolean
                        _o[_w]['default'] = false
                    }
                    continue checkj;
                }
            }
            _o[_w] = {}
            _o[_w]['type'] = String
            _o[_w]['default'] = ''
            
        }
    }
    return _o
}

exports.yield = yield
exports.yieldCreatObject = yieldCreatObject