// ＝＝＝＝＝＝メニューボタン＝＝＝＝＝＝

$(function(){
    $('.menuButton').on("click", function(){
        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
        $('#mask').toggleClass('active')
    });
});
// ＝＝＝＝＝＝スライド＝＝＝＝＝＝
$(function(){
    var dir = -1
    var interval = 3000;
    var duration = 700;
    var timer;
    $("#slide ul").prepend($("#slide li:last-child"));
    $("#slide ul").css("left", -562);

    timer = setInterval(slideTimer, interval);

    function slideTimer(){
        if(dir == -1){
            $("#slide ul").animate({"left": "-=562px"}, duration,
            function(){
                $(this).append($("#slide li:first-child"));
                $(this).css("left", -562);
            });
        }
        else {
            $("#slide ul").animate({"left": "+=562px"}, duration,
            function(){
                $(this).prepend($("#slide li:last-child"));
                $(this).css("left", -562);
                dir = -1;
            });
        }
    }
});

// ふわっと
$(function(){
    $(window).scroll(function(){
        $(".fadein").each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight =$(window).height();
            if (scroll > targetElement - windowHeight +150){
                $(this).addClass('scrollin');
            }
        });
    });
});
