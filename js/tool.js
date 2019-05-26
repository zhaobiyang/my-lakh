/**
 * Created by Beyond on 2019/1/2.
 */
/*bmi*/
'use strict';
var height=parseFloat(prompt('请输入身高(m):'));
var weight=parseFloat(prompt('请输入体重（kg):'));
var bmi=weight/height/height;
if(bmi>32){
    console.log(bmi);
    console.log("非常肥胖");
}else if(32>=bmi>=28){
    console.log(bmi);
    console.log("肥胖");
}else if(27>=bmi>=24){
    console.log(bmi);
    console.log("过重");
}else if(23>=bmi>=18.5){
    console.log(bmi);
    console.log("正常");
}else{
    console.log(bmi);
    console.log("过轻");
}


//js中定义对象
var obj={
    name:"zhang",
    birth:1992,
    getAge:function(){
        var nowY=new Date().getFullYear();
        return nowY-this.birth;
    }
}