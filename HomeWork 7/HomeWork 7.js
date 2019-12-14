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
///-----------------------------
var obj1 = {
    x: 10, 
    y: 20
    }
var obj2 = {
    z: 30
    }
var obj3 = {
    x: 10
}
var obj4 = {
    x: 20,
    y: 30
}
var obj5 = {
    h: 30,
    n: 40
}
var obj6 = {
    name: 'Vasya',
    surname: 'Smirnov'
}
function assignObjects(ob1, ob2) {
    var nObj = {}
    Object.assign(nObj, ob1, ob2);
    console.log(nObj);   
}
assignObjects(obj1, obj2);
assignObjects(obj3, obj4);