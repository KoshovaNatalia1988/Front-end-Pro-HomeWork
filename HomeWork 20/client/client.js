/* 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: запрос не инициализирован
    1: установлено соединение с сервером
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов
   xhttp.open("GET", "ajax_info.txt", true);
   xhttp.send();
*/
window.onload = function() {
    const users = document.querySelector('.users');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if(xhttp.readyState == 4) {
            let data = xhttp.responseText;
            let parseData = JSON.parse(data);
            console.log(parseData);
            renderLastUser(parseData);
        }
    }
   xhttp.open("GET", "http://localhost:3000/user", true);
   document.querySelector('#button').onclick = function() {
        xhttp.send();
    };
    function render(data) {
        let items = data.map(item => '<div' + ' class="block"' + '>' + item.title + '</div>');
          users.innerHTML  = items.join(' ')
    }
    function renderLastUser(data) {
        let item = ('<div' + ' class="block"' + '>' + data.title + '</div>');
        users.innerHTML  = item;
    }
}