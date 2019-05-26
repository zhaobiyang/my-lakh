/**
 * Created by Beyond on 2019/5/7.
 */
/**
 * JS概念
 */
//运算符(operator)[+ - * / = += -= *= /= == != < <= > >=]
//表达式
/**
 * 第1章——JavaScript概述：概览
 * */
    /**
     * 1.1 JavaScript语言核心
     * */
//所有在双斜线之后的内容都属于注释
//变量是表示值的一个名称，变量是通过var关键字声明的。
var x;
//只可以通过等号赋值给变量，也可以通过变量获取其值
x = 4;
x;
//javaScript支持多种数据类型
x = 10;//数字
x = 0.9;//整数和小数共用一种数据结构
x = "hello world";//由双引号内的文本构成的字符串
x = 'javascript';//单引号内的文本同样构成字符串
x = true;//布尔值
x = false;//另一个布尔值
x = null;//null是一个特殊值，意思是“空”
x = undefined;//undefined和null非常类似
//javaScript中两个非常重要的数据类型是对象和数组
//对象是名值对的集合，或字符串到值的映射的集合
var book = { //对象是由花括号括起来的
    name:"javaScript权威指南",
    fat:true
};
//通过"."或"[]"来获取对象属性
book.name;
book["fat"];
book.ctime = '2012';//通过赋值创建一个新属性
book.contents = {};//{}是一个空对象，它没有属性
//javaScript同样支持数组（以数字为索引的列表）
var primes = [2,3,12,4];//拥有四个值的数组，由"["和"]"划定边界
primes[0];//数组中的第一个元素
primes.length;//数组中的元素的个数
primes[primes.length - 1]//数组的最后一个元素
primes[4] = 34;//通过赋值来添加新元素
primes[4] =0;//或通过赋值来改变已有的元素
var empty  = [];//[]是个空数组，它具有0个元素
//对象和数组都可以包含另一个数组或对象
var point  = [
    {name:"css",ctime:2000},
    {name:"HTML",ctime:10000}
];
var obj = {
    arr:[32,43,2],
    obj1:{name:"vue",ctime:2134}
}

//javaScript中最常见的表达式的写法是像下面代码这样使用运算符
//运算符作用于操作数，生成一个新的值
//最常见的是算术运算符
2+3;
//js中定义了一些算术运算符的简写形式
var count = 0;
count++;
count--;
count+=23;
count-=3;
count*=3;
count; //count变量名本身也是一个表达式
//相等关系运算符用来判断两个值是否相等
//相等、不等、大于、小于运算符的运算结果是true或false
//逻辑运算符是对布尔值的合并或求反
var x= 0,y=8;
(x==2) && (y==9)//false

//函数是带有名称（这里的名称是指函数具有固定的标识，并不是指函数变量名称）和参数的JavaScript代码段，可以一次定义多次调用
//将函数和对象写在一起的时候函数就变成了“方法”（method）
//将函数赋值给对象的属性，我们成为方法，所有的JavaScript对象都有方法
var a = [];
a.push(23,3,4,5); //push 方法向数组中添加元素
//我们也可以自定义方法，‘this’关键字是对定义方法的对象的引用；
points.dist = function () { //定义一个方法计算两点间的距离
    var p1 = this[0]; //通过this获得对当前数组的引用
    var p2 = this[1]; //并获得调用数组的前两个元素
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a*a+b*b)
};
points.dist(); //求得两点间的距
//JavaScript是一种面向对象的编程语言，但和传统的面向对象又有很大的区别。
//定义一个构造函数一初始化一个新的Point对象
function Point(x,y){ //按照惯例，构造函数均以大写字母开始
    this.x = x;   //关键字this指代初始化的实例
    this.y = y;   //将函数参数存储为对象的实例
}                 //不需要return
//使用new关键字和构造函数来创建一个实例
var p = new Point(1,2);//平面几何中的点（1，1）
//通过给构造函数的prototype对象赋值，来给Point对象定义方法
Point.prototype.r = function(){
    return Math.sqrt(this.x*this.x+this.y*this.y); //this指代调用这个方法的对象
};
//Point的实例对象p(以及所有的Point实例对象)继承了方法r();
p.r();
    /**
     * 1.2 客户端JavaScript
     * */
//在document中的一个指定的区域输出调试信息
//如果document不存在这样一个区域，则创建一个
function debug(msg){
    var log = document.getElementById('dubuglog');
    if(!log){
        log = document.createElement('div');
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }
    //将消息包装在pre中，并添加至log中
    var pre = document.createElement("pre");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}
//通过JavaScript操纵样式来隐藏元素e
function hide(e,reflow){
    if(reflow){
        e.style.display  = "none";
    }else{
        e.style.visibility = "hidden";
    }
}
//通过设置CSS类来高亮显示e
function highlight(e){
    //简单地定义或追加HTML类属性
    if(!e.className){e.className = "hilite"}
    else{e.className  += " hilite"}
}
//通过事件处理程序来定义文档的行为
//定义事件处理程序最简单的方法是，给HTML的以“on”为前缀的属性绑定一个回调。
//<button onclick = "highlight(this)"></button>
//load事件只有在文档加载完成后才能触发
//通常要等到load事件发生后才开始执行JavaScript代码
window.onload = function(){
    //找到文档中所有的<img>标签
    var images= document.getElementsByTagName('img');
    //遍历images,给每个节点的“click”事件添加事件处理程序
    //再点击图片的时候将图片隐藏
    for(var i=0;i<images.length;i++){
        var image = images[i];
        if(image.addEventListener){
            image.addEventListener("click",hide,false);
        }else{
            image.attachEvent("click",hide);
        }
    }
    //这便是上面注册的事件处理函数
    function hide(event){event.target.style.visibility = "hidden"}
};
//这里使用jQuery重写了上面的debug()函数
function debug(msg){
    var log = $("#debuglog");//找到要显示msg的元素.
    if(log.length == 0){      //如果不存在则创建
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
        log.appendTo(document.body);
    }
    log.append($("<pre></pre>").text(msg));//将msg包装在<pre>中，在追加到log里
}
