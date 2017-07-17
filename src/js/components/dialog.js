$(function(){
    var addRadio=$('.add-tab input');
    addRadio.click(function(){
            $('.add-list').eq($(this).index()).
                css("display","block").
                siblings('.add-list').css("display","none")
    })
})