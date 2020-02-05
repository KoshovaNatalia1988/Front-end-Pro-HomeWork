window.onload = function() {
  var config = {
    el: '#app',
    data: {
        goods1:[{label:'Поиск заказов на фрилансе'}, {label:'Сходить за бумагой формата А-4'}, {label:'Поиск авторов в команду, организация работы'}, {label:'Выбрать тему для статьи на блог'}, {label:'Заправиться'}],
        goods2:[{label:'Заехать в сервисный центр'}, {label:'Тренажерный зал'}, {label:'Продумать стратегию проведения вебинара'}, {label:'Оплатить работу корректора'}, {label:'Заехать в магазин'}],
    },
    methods: {
      transposition1() {
        let delElem =  vue.goods1.pop(0);
        vue.goods2.unshift(delElem);
      },
      
      transposition2() {
        let delElem =  vue.goods2.pop(0);
        vue.goods1.unshift(delElem);
      }
    } 
  }    
let vue = new Vue(config);
}