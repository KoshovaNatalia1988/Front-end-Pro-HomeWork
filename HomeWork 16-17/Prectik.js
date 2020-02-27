window.onload = function() {
    var blocks = document.querySelectorAll(".block");
    var button = document.querySelectorAll(".button")
    var name = document.querySelectorAll(".name");
    var surname = document.querySelectorAll(".surname");
    var age = document.querySelectorAll(".age");
    console.dir(blocks);
    function parent(element, selector) {
        return element.closest(selector)
    };
    function validation(i) {
        if(name[i].value.length < 5) {
            console.log("Не коректно введено имя");
            return false;
        } else if(surname[i].value.length < 7) {
            console.log("Не коректно введена фамилия");
            return false;
        } else if(age[i].value < 18) {
            console.log("Указанный возраст меньше 18 лет");
            return false;
        }
        return true;
    };
    function setLocal(blocks,counter) {
        var newObj = {};
        for(var i = 0; i < blocks.length; i++) {
            var name = blocks[i].name;
            var value = blocks[i].value;
            newObj[name] = value;
        }
        var json = JSON.stringify(newObj);
        localStorage.setItem("form" + counter, json);  
    }
    function nextStep(i) {
        if(blocks[i + 1]) {
            blocks[i].classList.remove("center");
            blocks[i + 1].classList.add("center");
        } else {
            blocks[i].classList.remove("center");
            blocks[0].classList.add("center"); 
        }
    }
    for(let i = 0; i < blocks.length; i++) {
        var block = parent(button[i], '.block').querySelectorAll(".name, .surname, .age");
        getLocal(block,i);
        button[i].onclick = function() {
            var val = validation(i);
            if(val == true) {
                var blocks = parent(button[i], '.block').querySelectorAll(".name, .surname, .age");
                setLocal(blocks,i);
                nextStep(i);
            } 
        }
    }
    function getLocal(blocks, counter) {
        var newObj =  JSON.parse(localStorage.getItem("form" + counter));
        for(var i = 0; i < blocks.length; i++) {
            if(newObj) {
                var name =  blocks[i].name;
                var value = newObj[name];
                blocks[i].value = value;
            }
        }
    }
}