window.onload = function() {
    var  input = document.querySelectorAll('input');
    console.dir(input);
    var result = document.querySelector('#result');
    for(var i = 0; i < input.length; i++) {
        input[i].onchange = (function(i) {
            return function() {
                result.innerHTML += input[i].value + ', ';
            }
        })(i);
    }  
}