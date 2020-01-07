window.onload = function() {
    var box = document.querySelector('.box');
    console.log(box);
    console.dir(box);
    box.onclick = function() {
        box.classList.toggle('active');
    };
    document.addEventListener('click', function(event) {
        box.style.top = event.clientY + 'px';
        box.style.left = event.clientX + 'px';
    });
}