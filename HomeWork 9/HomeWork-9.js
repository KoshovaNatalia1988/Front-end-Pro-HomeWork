var obj = {
    result: "",
    clear: function() {
        this.result = 0;
        return this;
    },
    doFunction: function(func, a,b) {
        this.result = func(a,b);
        return this;
    },
    copy: function(buffer) {
        this[buffer] = this.result;
        return this;
    },
};
function sum(a,b) {
    return a + b;
};
function mul(a,b) {
    return a * b;
};
console.log(obj.doFunction(mul,7,8).copy('some_name'));
//////////////////////////////////////////////////
var str = 'var_text_hello';
var newStr = str.split("_");
function modification_Str(str) {
    for (var i = 1; i < newStr.length; i++) {
        var letterBig = newStr[i][0].toUpperCase();
        for (var j = 1; j < newStr[i].length; j++) {
            letterBig += newStr[i][j];
        };
        newStr[i] = letterBig;
    };
    str = "";
    for (var i = 0; i < newStr.length; i++) {
        str += newStr[i];
    }
    return str;
};
var result = modification_Str(newStr);
console.log(result);
///////////////////////////////////////////
var mass = ['sjhfnaof', 'affooasf', 'dfhdfhdfh'];
var elemntStr = 'foo';
function inArray(str, arr) {
    for(var i = 0; i < mass.length; i++) {
       if(arr[i].indexOf(str) !== -1 ) {
           console.log('Строка, где найдено совпадение = ',arr[i]);
            return true;
        }
    }
    return false;
  }
  var res = inArray(elemntStr,mass);
  console.log(res);














