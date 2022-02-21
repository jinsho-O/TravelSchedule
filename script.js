$(function () {
    $(".day1btn").on("click", function () {
        $(".day1").removeClass("hide");
        $(".day2").addClass("hide");
        $(".day3").addClass("hide");
    })
    $(".day2btn").on("click", function () {
        $(".day2").removeClass("hide");
        $(".day1").addClass("hide");
        $(".day3").addClass("hide");
    })
    $(".day3btn").on("click", function () {
        $(".day3").removeClass("hide");
        $(".day2").addClass("hide");
        $(".day1").addClass("hide");
    })

    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 500);
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 2500);

    var page = 0;

    //（２）イメージの数を最後のページ数として変数化
    var lastPage = parseInt($(".intro-container").length - 1);

    //（３）最初に全部のイメージを一旦非表示にします
    $(".intro-container").css("display", "none");

    //（４）初期ページを表示
    $(".intro-container").eq(page).css("display", "flex");

    //（５）ページ切換用、自作関数作成
    function changePage() {
        $(".intro-container").fadeOut(1000);
        $(".intro-container").eq(page).fadeIn(1000);
    };

    //（６）～秒間隔でイメージ切換の発火設定
    var Timer;
    function startTimer() {
        Timer = setInterval(function () {
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            };
        }, 5000);
    }
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer() {
        clearInterval(Timer);
    }

    //（８）タイマースタート
    startTimer();

    /*オプションを足す場合はここへ記載*/
    //（９）「次へ」をクリック
    $("#nav-r").click(function () {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
        stopTimer();
        startTimer();
        if (page === lastPage) {
            page = 0;
            changePage();
        } else {
            page++;
            changePage();
        };
    });

    //「戻る」をクリック
    $("#nav-l").click(function () {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
        stopTimer();
        startTimer();
        if (page === 0) {
            page = lastPage;
            changePage();
        } else {
            page--;
            changePage();
        };
    });
    $(function() {
        $(".fade").letterfx({
          "fx": "fade"
        });
      });
      let index = 0;
  let slideMax = $('.slide').length
  $('.right-arrow').on('click',function () {
    if (index !== slideMax-1) {
      index++;
      num = index * -1 * 100;
      $('.slide-container').css({'transform':`translateX(${num}%)`})
    }
  })
  $('.left-arrow').on('click',function () {
    if (index !== 0) {
      index--;
      num = index * -1 * 100;
      $('.slide-container').css({'transform':`translateX(${num}%)`})
    }
  })

  $(".loading").height($(window).height());
$(".loading").width($(window).width());

    
$(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
});

$(window).resize(function () {
   
    "use strict";
    
    $(".loading").height($(window).height());
    $(".loading").width($(window).width());


    $(".loading img").css({
        paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
        paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
    });
    
});

$(window).mousemove(function (e) {
   
    "use strict";
    
    $(".original").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    });
    
});

$("body").on("click", function (e) {
   
    "use strict";
    
    $(".original").clone(true).appendTo("body").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    }).removeClass("original");
    
});
});