let promise = new Promise(function(resolve,regect) {
    console.log(0);
    setTimeout(function(){
        const question = confirm();
        if(question){
            resolve(question);
        } else {
            regect(question);
        }
    }, 1000);
});
promise.then(function(question) {
    console.log(1); 
    return question;
},
function(question ) {
   console.log(2);
   return question;
})
.then(function(question) {
    console.log(3);
    return Promise.reject(question);   
},
function() {
    console.log(4);
})
.then(function() {
    console.log(5);
},
function(question) {
    console.log(6);
    if(!question) {
        return question; 
    } else {
        return Promise.reject(question);
    }
})
.then(function(question) {
    console.log(7);
     return question;
    
},
function(question) {
    console.log(8);
    return question;
})
.then(function(question) {
    console.log(9);
    return Promise.reject(question);
},
function() {
    console.log(10);
})
.then(function() {
    console.log(11);
},
function(question) {
    console.log(12, question);
});
