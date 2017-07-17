/**
 * Created by Administrator on 2017/4/16 0016.
 */
$(function(){
   //var htmlH= $(document).height();
   // var winH=$(window).height();
   // $(".mask input[type='text']").on({
   //     "focus":function(){
   //        $('body').height(winH);
   //         //$('body').height(winH).css("overflow","hidden");
   //     },
   //     "blur":function(){
   //         $('body').height(htmlH)
   //     }
   // })
    var start=$('.startBtn'); var ok=$(".ok");
    var authEnsure= $("#authPhone .ensure");
    $("#mask").on('touchmove',function(e){
        e.preventDefault();  //阻止默认行为
    })
    var ok=$(".ok");
    var layer=$(".mask");
    //关闭弹窗
    $(".mask-close").click(function(){
        $(this).parent('div').hide();
        layer.hide();
    })
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
    var aw=new Award($('.bl'),'aw-block-sel',start,mask);
    start.click(function(){
        if(aw.timeF){
            aw.run();
            aw.timeF=false;
            var date=new Date();
            console.log('开始时间'+date.getSeconds())
        }

    });
    $(".add-tab input").click(function(){
       $(".add-list").eq($(this).index()).show().siblings(".add-list").hide();
    });
    $(".check-box").click(function(){
        if(!$(this).data("checked")){
            $(this).data("checked","true")
            $(this).html("&#xe60e;")
        }
        else{
            $(this).data("checked","false")
            $(this).html("&#xe624;")
        }
    })
//    点击复制

    var clipboard = new Clipboard('.copy');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
})