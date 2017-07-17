/**
 * Created by Administrator on 2017/4/18/0018.
 */
var speed=50;
var list=document.getElementById('slider');
var length=list.children.length;

var list2=document.getElementById('slider2');
var rule=document.getElementById('txtScroll');
var usHeight=document.querySelector('.users').offsetHeight;
list2.innerHTML=list.innerHTML;
function Marquee(){
            if(rule.scrollTop==usHeight*length){
                rule.scrollTop=0;
            }
        rule.scrollTop++;
}
var MyMar=setInterval(Marquee,speed);
rule.addEventListener('touchstart',function(){
    clearInterval(MyMar)
})
rule.addEventListener('touchend',function(){
    MyMar=setInterval(Marquee,speed)
}
)
