 const gen = require('../yield')
 
 const noEmpty = (target) =>{
    if (target) { // {} [] ' ' Infinity -Infinity  Symbol() new Date()
        if (target instanceof Array || typeof target === 'object'){
            if (Object.keys(target).length === 0) {
                if(target instanceof Date){
                    return true //new Date()
                }
                return false
            }
            return true
        }
        return true
    }else{
       return false // 0 -0 null '' NaN undefined
    }
    
 }


 const valueIsEmpty = obj =>{
     const _arr = []
     for (const key in obj) {
         if (obj.hasOwnProperty(key)) {
             if (!noEmpty(obj[key])) _arr.push(key)
         }
     }
     return _arr
 }

 
 
 exports.noEmpty = noEmpty
 exports.valueIsEmpty = valueIsEmpty
 