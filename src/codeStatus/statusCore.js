module.exports = {
    success: {
      core: 200,
      msg: '数据成功'  
    },
    fail: {
        core: 400,
        msg: '数据失败'
    },
    have: {
        core: 401,
        msg: '数据已经存在'
    },
    empty:{
        core: 300,
        msg: '字段数值为未定义'
    },
    rename:{
        core:201,
        msg: '重命名失败'
    },
    dbConnect:{
        core: 500,
        msg: '链接数据库失败'
    },
    actionDB:{
        core: 501,
        msg: '链接数据库失败'
    }

}