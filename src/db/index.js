const options = require("./options")
const core = require('../codeStatus/statusCore')

const initAdditional = (additional) => {
    additional.sort = additional.sort || {}
    additional.limit = additional.limit || 0
    additional.skip = additional.skip || 0
}


//支持批量添加、删除以及更新,支持分页(排序)查询
module.exports = async (option) => {
    const ops = {
        acitonType: 'DEFAULT',
        model: {},
        data: [{}],
        additional: {}
    }
    Object.assign(ops, option)
    const returnData = {}
    ops.acitonType = ops.acitonType.toUpperCase()
    let actionArray = [];
    for (let index of options.acitonType) {
        actionArray.push(index['type'])
    }

    if (!actionArray.includes(ops.acitonType)) {
        return false
    }
    initAdditional(ops.additional);
    return new Promise(async (resolve, reject) => {
        async function processData(data, coreObj) {
            returnData.data = data
            Object.assign(returnData, coreObj)
            resolve(returnData)
        }

        switch (ops.acitonType) {

            case options.acitonType[0]['type']: // 执行插入数据操作
                ops.model.insertMany(ops.data, (error, docs) => {
                    if (error) processData(error, core.actionDB)
                    else processData(docs, core.success)
                })
                break;

            case options.acitonType[1]['type']: // 执行删除数据操作
                ops.model.deleteMany(ops.data[0], (error, docs) => {
                    if (error) processData(error, core.actionDB)
                    else processData(docs, core.success)

                })
                break;

            case options.acitonType[2]['type']: // 执行查找数据操作
                ops.model
                    .find(ops.data[0], (error, docs) => {
                        if (error) processData(error, core.actionDB)
                        else processData(docs, core.success)
                    })
                /*.sort(ops.additional.sort)
                                    .limit(ops.additional.limit)
                                    .skip(ops.additional.skip)*/
                break;

            case options.acitonType[3]['type']: // 执行更新数据操作
                ops.model.updateMany(ops.data[0], ops.data[1], (error, docs) => {
                    if (error) processData(error, core.actionDB)
                    else processData(docs, core.success)
                })
                break;

            case options.acitonType[4]['type']: //执行 查找符合条件的数据条目
                ops.model.countDocuments(ops.data[0], (error, docs) => {
                    if (error) processData(error, core.actionDB)
                    else processData(docs, core.success)
                })
                break;

            default:
                break;
        }
    });

}
