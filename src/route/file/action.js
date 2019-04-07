const fs = require('fs')

const rename = (oldPath, newPath) => {
    return new Promise((resolve, reject) => {
        fs.rename(oldPath, newPath, err => {
            if(err){
                resolve()
            }else{
                resolve()
            }
        })
    });
}

exports.rename = rename