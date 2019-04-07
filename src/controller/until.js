const db = require('../db');



/*const connectAndClose = ops => {
    return new Promise((resolve, reject) => {
        db(ops, (result) => {
            resolve(result)
        })
    });
}*/

const connectAndClose = ops => {
    return new Promise(async(resolve, reject) => {
        const result = db(ops)
        resolve(result)
    });
}

const initOption = (collection, model) => ({
    collection: collection,
    model: model
})


const setOption = (option, conditions, method) => {
    option['acitonType'] = method || 'DEFAULT'
    option['data'] = conditions || [{}]
}
const number = (option, conditions) => {
    setOption(option, conditions)
    return connectAndClose(option)
}
const isInsert = async (option, conditions, judge) => {
    if (judge['isOk']) {
        const h = await number(option, conditions)
        console.log('H:');
        console.log(h);
        if (h.data) {
            judge['isContinue'] = false
        }
    }
}

const isShouCount = async (option, conditions, judge) => {
    judge['count'] = 0
    if (judge['isShowCount']) {
        const h = await number(option, conditions)
        judge['count'] = h
    }
}
exports.isShouCount = isShouCount
exports.setOption = setOption
exports.isInsert = isInsert
exports.number = number
exports.initOption = initOption
exports.connectAndClose = connectAndClose