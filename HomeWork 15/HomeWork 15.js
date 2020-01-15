window.onload = function() {
    function create() {
        var date = { 
            name: 'menu', 
            type: 'column', 
            items: [
                {
                    title: 'title 1',
                    handler: 'ActionAdd'
                },
                {
                    title: 'title 2',
                    handler: 'ActionSaveAs'
                },
                {
                    title: 'title 3',
                    handler: 'ActionExit' 
                }
            ]
        }
        return date;
    }
    actions = {
        ActionAdd: function() {return console.log('ActionAdd')},
        ActionSaveAs: function() {return console.log('ActionSaveAs')},
        ActionExit: function() {return console.log('ActionExit')}
    }
    var data = create();
    var items = data.items;
    console.log(items);
    var container = document.createElement('container');
    if(data.type == 'column') {
        container.classList.add('container', 'column');
    } else if(data.type == 'row') {
        container.classList.add('container','row'); 
    }
    for(var i = 0; i < items.length; i++) {
        var span = document.createElement('span');
        span.classList.add('button');
        span.innerHTML = items[i].title;
        span.onclick = actions[items[i].handler];
        container.append(span);
    }
    document.querySelector('body').append(container); 
}