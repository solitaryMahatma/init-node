const mongoose = require("mongoose")
const dbSetting = require("./settins") //设置数据库参数

// 链接数据库
const connect = () => {
    mongoose.connect(dbSetting.dbUrl, {
            user: dbSetting.userName,
            pass: dbSetting.password,
            useNewUrlParser: true
        })
        .then(() => {

        }).catch(() => {

        })
}

/*const close = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connection
            .close()
            .then(() => {
                resolve()
            }).catch(() => {
                resolve()
            }).finally(() => {
                Object.keys(mongoose.connection.models).forEach(key => {
                    delete mongoose.connection.models[key];
                });
            })
    });
}*/
module.exports = connect