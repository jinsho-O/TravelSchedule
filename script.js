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

});