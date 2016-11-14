//1.创建一个模块
//创建模块的函数
//参数1：模块名称
//参数2：模块所依赖的模块

angular.module('hello',[]);



//定义controller的方法
//1.取得controll所属的module，用angular.module('hello')==>传一个参数是取得模块
//，传两个是定义模块
//2.调用module的方法controll来定义一个controller
angular
    .module('hello')
    .controller('NameController',function($scope){
        $scope.name='lynnReno1994  !';
});
