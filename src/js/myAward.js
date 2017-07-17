/**
 * Created by Administrator on 2017/4/21/0021.
 */
$(function(){
    var authEnsure= $("#authPhone .ensure");
    $("#mask").on('touchmove',function(e){
        e.preventDefault();  //阻止默认行为
    })
    var ok=$(".ok");
    var layer=$(".mask");
    var duiSpan=$('.dui');
    ok.click(function(event){
        layer.hide();
        $(this).parent('div').hide();
        return false;
    });
    $(".dia-btn").click(function(event){//未中奖里面的确定按钮
        layer.hide();
        $('#wzj').hide();
    })
    var mask=function(index){
        layer.show();
        switch (index){
            case 0:
                $("#czk").show().find("input[type='text']").val("");
                break;
            case 1:
                $("#yhq").show().find("input[type='text']").val("");
                break;
            case 2:
            case 4:
            case 5:
            case 6:
                $('#wzj').show();
                break;
            case 3:
                $("#dlhcks").show().find("input[type='text']").val("");
                break;
            case 7:
                $("#dzzl").show().find("input[type='text']").val("");
                break;
            default:break;
        }
    }
/*
* 0充值卡
* 1优惠券
* 2未中奖
* 3参考书
* 4
* 5
* 6未中奖
* 7电子资料
*
*
* */
    duiSpan.click(function(){

       mask($(this).data("index"))
    })
})