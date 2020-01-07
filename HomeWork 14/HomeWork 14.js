window.onload = function() {
    var box = document.querySelector('.box');
    console.log(box);
    console.dir(box);
    box.onclick = function() {
        box.classList.toggle('active');
    };
}