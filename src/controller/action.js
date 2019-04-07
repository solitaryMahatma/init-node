const util = require('./until')
const core = require('../codeStatus')

const action =  (options) => {
    
    return new Promise( async (resolve, reject) => {
        const ops = util.initOption(options['collection'], options['model'])
        let condition = null
        switch (options['method']) {
            case 'POST':
                options['judge']['type'] = '创建'
                await util.isInsert(ops, options['condition'], options['judge'])
                condition = options['postCondition']
                break;

            case 'PUT':
                options['judge']['type'] = '更新'
                condition = options['putCondition']
                break;

            case 'GET':
                options['judge']['type'] = '获取'
                await util.isShouCount(ops, options['condition'], options['judge'])
                condition = options['getCondition']
                break;

            case 'DELETE':
                options['judge']['type'] = '删除'
                condition = options['deleteCondition']
                break;

            default:
                break;
        }
        if (options['judge']['isOk'] && !options['judge']['isContinue']) {
            resolve(core.have)
        } else {
            util.setOption(ops, condition, options['method'])
            const response = await util.connectAndClose(ops)
            if (options['judge']['isShowCount'] && options['method'] === 'GET') {
                response['dataCount'] = options['judge']['count']
            }
            response['msg'] = options['judge']['type'] + response['msg']
            resolve(response)
        }
    });
}

module.exports = action