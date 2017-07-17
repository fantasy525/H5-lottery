$(function () {
  //var htmlH= $(document).height();
  //var winH=$(window).height();
  //console.log(window.screen.height)
  //$(".mask input[type='text']").on({
  //    "focus":function(){
  //        $('body').height(winH).css("overflow","hidden");
  //    },
  //    "blur":function(){
  //        $('body').height(htmlH).css("overflow","auto");
  //    }
  //})
  var start = $('.startBtn');
  var ok = $(".ok");
  var layer = $(".mask");
  var authEnsure = $("#authPhone .ensure");
  $("#mask").on('touchmove', function (e) {
      e.preventDefault(); //阻止默认行为
    })
    //关闭弹窗
  $(".mask-close").click(function () {
    $(this).parent('div').hide();
    layer.hide();
  })

  function success(callback) {
    $('#authPhone').show().find("input[type='text']").val("");
    //此处需要验证用户输入的手机号码和验证码
    var f = false;
    var txt = $("#authPhone .txt");

    txt.on({
      "input": function () {
        if (txt.eq(0).val() == "" || txt.eq(1).val() == "") {
          f = false;
        } else {
          f = true;
        }
        if (f) {
          f = false;
          authEnsure.removeAttr("disabled").css("backgroundColor", "rgba(255,204,33,1)");
        } else {
          authEnsure.attr("disabled", "true").css("backgroundColor", "rgba(255,204,33,0.5)");

        }
      }
    });
    authEnsure.one("click", function (event) {
      event.stopPropagation();
      $(this).attr("disabled", "true").css("backgroundColor", "rgba(255,204,33,0.5)");
      $("#authPhone ").hide();
      callback();
      return false;
    })
  }
  ok.click(function (event) {
    layer.hide();
    $(this).parent('div').hide();
    return false;
  });
  $(".dia-btn").click(function (event) {
    layer.hide();
    $('#wzj').hide();
  });
  var mask = function (index) {
    layer.show();
    switch (index) {
    case 0:
      success(function () {
        $("#czk").show().find("input[type='text']").val("");
      });
      break;
    case 1:
      success(function () {
        $("#yhq").show().find("input[type='text']").val("");
      });
      break;
    case 2:
    case 4:
    case 5:
    case 6:
      $('#wzj').show();
      break;
    case 3:
      success(function () {
        $("#wdlcks").show().find("input[type='text']").val("");
        return;
      });
      break;
    case 7:
      success(function () {
        $("#dzzl").show().find("input[type='text']").val("");
      });
      break;
    default:
      break;
    }
  };
  var aw = new Award($('.bl'), 'aw-block-sel', start, mask);
  start.click(function () {
      if (aw.timeF) {
        aw.run();
        aw.timeF = false;
        var date = new Date();
        console.log('开始时间' + date.getTime())
      }

    })
    //    查询中奖记录
  $('.selBtn').click(function () {
    window.location.href = "myAward.html"
  })

})
