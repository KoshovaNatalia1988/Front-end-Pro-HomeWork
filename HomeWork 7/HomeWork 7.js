var obj = {
    a: 10,
    b: 12,
    c: {
        f: 13
    }
}
var newObject = {};
function convert(obj) {
    for(var key in obj) {
        if(typeof obj[key] == 'object') {
            convert(obj[key])
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}
res = convert(obj);
console.log(res);