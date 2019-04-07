const padding = require('../padding')

const now = function (string = "yyyymmddhhmmssms") {
    const nowTime = new Date()
    const time = {
        year: nowTime.getFullYear(),
        month: nowTime.getMonth() + 1,
        day: nowTime.getDate(),
        week: nowTime.getDay(),
        timeStamp: nowTime.getTime(),
        hour: nowTime.getHours(),
        minute: nowTime.getMinutes(),
        second: nowTime.getSeconds(),
        millisecond: nowTime.getMilliseconds(),
        toLocaleDateString: nowTime.toLocaleDateString(),
        toLocaleTimeString: nowTime.toLocaleTimeString(),
        toLocaleString: nowTime.toLocaleString()
    }

    function format(string) {
        let _v = ''

        function lg9(min, max) {
            const ops = {
                min: ''+min,
                max: max?''+ max: '99'
            }
            return padding.paddingZero(ops)
        }
        switch (string) {
            case 'yyyymmddhhmmssms':
                _v = _v + time.year + lg9(time.month) + lg9(time.day) + lg9(time.hour) + lg9(time.minute) + lg9(time.second) + lg9(time.millisecond, 999)
                break;

            default:
                _v = time.toLocaleTimeString
                break;
        }
        return _v
    }
    time.custom = format(string)
    return time
}

exports.now = now