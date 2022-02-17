$(function(){
    $(".day1btn").on("click",function(){
        $(".day1").removeClass("hide");
        $(".day2").addClass("hide");
        $(".day3").addClass("hide");
    })
    $(".day2btn").on("click",function(){
        $(".day2").removeClass("hide");
        $(".day1").addClass("hide");
        $(".day3").addClass("hide");
    })
    $(".day3btn").on("click",function(){
        $(".day3").removeClass("hide");
        $(".day2").addClass("hide");
        $(".day1").addClass("hide");
    })

    setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); 
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); 

    var page=0;

//（２）イメージの数を最後のページ数として変数化
var lastPage =parseInt($(".intro-container").length-1);

//（３）最初に全部のイメージを一旦非表示にします
     $(".intro-container").css("display","none");

//（４）初期ページを表示
          $(".intro-container").eq(page).css("display","block");

//（５）ページ切換用、自作関数作成
function changePage(){
                         $(".intro-container").fadeOut(1000);
                         $(".intro-container").eq(page).fadeIn(1000);
};

//（６）～秒間隔でイメージ切換の発火設定
var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },5000);
}
//（７）～秒間隔でイメージ切換の停止設定
function stopTimer(){
clearInterval(Timer);
}

//（８）タイマースタート
startTimer();

/*オプションを足す場合はここへ記載*/

});