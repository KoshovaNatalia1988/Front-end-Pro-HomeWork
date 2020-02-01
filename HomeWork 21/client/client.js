window.onload = function() {
   let goods =  document.querySelector('.goods');
   let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if(xhttp.readyState == 4) {
            let id = xhttp.responseText;
            console.log(id)
            if (xhttp.status != 200) {
                goods.innerHTML = xhttp.status + ' ' + xhttp.statusText;
                console.log(xhttp.status + ' ' + xhttp.statusText);
            } else {
                goods.innerHTML = "";
                requestGoogs(id);
            }
        } 
    };
    function requestGoogs(id) {
        let newxhttp = new XMLHttpRequest();
        newxhttp.onreadystatechange = function() {
            console.log(newxhttp.readyState, 'newxhttp.readyState');
            if(newxhttp.readyState == 4) {
                let tovar = JSON.parse(newxhttp.responseText);
                renderGoodsrUser(tovar);
            }
        }
        sendAjax(newxhttp,'post', 'http://localhost:3000/goods',id);
    }; 
    document.querySelector('.button').onclick = function() {
        var login = document.querySelector('.login').value;
        var password = document.querySelector('.password').value;
        let data = {
           login: login,
           password: password
        }
        sendAjax(xhttp,"post", "http://localhost:3000/users",data) 
    };
    function sendAjax(http,metod,url,data) {
        http.open(metod,url,true);
        http.send(JSON.stringify(data));
    };
    function renderGoodsrUser(data) {
        for(let i = 0; i < data.length; i++) {
            goods.innerHTML +=  "<li>" + data[i].title + ": color - " + data[i].color + "</li>";
        }
    }; 
}