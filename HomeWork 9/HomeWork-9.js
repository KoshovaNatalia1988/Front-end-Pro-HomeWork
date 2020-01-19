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