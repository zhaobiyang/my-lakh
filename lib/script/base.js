/**
* 计算平面上两点间的距离
* */
var points=[
    {x:10,y:20},
    {x:30,y:0}
];
points.dis = function () {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a*a+b*b)
};
console.log(points.dis());
/**
 * 求绝对值的函数
 * */
function abs(x) {
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}

/**
 * 计算阶乘的函数
 * */
function factorial(n) {
    var product =1;
    while (n>1){
        product *= n;
        n--;
    }
    return product;
}
/**
 * 计算阶乘的函数（for循环）
 * */
function factorial2(n){
    var product = 1;
    for(var i = 1;i <= 3 ;i++){
        product *= i;
    }
    return product;
}
/**
 * 根据ID获取元素
 * */
function byId(id){
    return typeof id === "string"?document.getElementById(id):id;
}