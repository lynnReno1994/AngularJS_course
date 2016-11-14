//1.创建一个模块
//创建模块的函数
//参数1：模块名称
//参数2：模块所依赖的模块

angular.module('phonecatApp',[]);



//定义component的方法
//1.取得component所属的module，用angular.module('hello')==>传一个参数是取得模块
//，传两个是定义模块
//2.调用module的方法component来定义一个component
angular
    .module('phonecatApp')
    .component('phoneList',{
        template:`
            <ul>
                <li ng-repeat="phone in $ctrl.phones">
                    <span>{{phone.name}}</span>
                    <p>{{phone.description}}</p>
                </li>
            </ul>
        `,
        controller:function($scope){
            this.phones=[{
                name:'iphone7',
                description:'gui'
            },{
                name:'Samsung',
                description:'zha'
            },{
                name:'锤子 M1t',
                description:'hahaha'
            }]
        }
    });
