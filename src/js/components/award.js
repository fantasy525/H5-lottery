;(function(window){
    var r=0;
    var index=0;
    var speed=30;
    var random=null;
    var timer=null;
    var array=[0,1,2,4,7,6,5,3];
    function Award(el,selClass,start,mask){
        this.el=el;
        this.start=start;
        this.selClass=selClass;
        this.timeF=true;
            this.mask=mask;
    }
    Award.prototype={
        constructor:Award,
        roll:function(){
            index++;
            if(index>7){
                index=0;
                r++;
            }
            this.el.eq(array[index]).addClass( this.selClass).siblings('.bl').removeClass( this.selClass);
            this.run();
        },
        run:function(){
            if(r==4&&random==index){
                this.mask(index);
                this.timeF=true;
                var date=new Date();
                console.log('结束时间'+date.getTime())
                clearTimeout(timer);
                index=-1;
                 r=0;
                speed=30;
                return;
            }else {
                if(r==2){
                    speed=100;
                }else if(r==3&&index==0){
                    random=parseInt(Math.random()*7);

                    speed=150;
                }
            }
            var that=this;
            timer=setTimeout(function(){
                that.roll();
            },speed);
        }
    }
    window.Award=Award;
})(window);