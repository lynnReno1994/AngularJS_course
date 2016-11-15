angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function() {
      this.phones = [{
        name: 'iphone7',
        desc: '不会轻易爆炸'
      }, {
        name: 'Samsung note7',
        desc: '不让拿上飞机'
      }, {
        name: '锤子 M1t',
        desc: '这次不能敲钉子了'
      }]
    }
  });
