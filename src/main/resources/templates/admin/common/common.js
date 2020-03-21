// 左侧切换
$(function () {

    var i = false;
    $(".change-icon").click(function () {
        $(".admin-left").toggleClass("change-left2");
        $(".admin-left>div:nth-child(2)").toggleClass("change-left1");
        $(".admin-left>div a span").toggle();
        if ($(".admin-left").hasClass("change-left2")) {
            i = true;
        } else {
            i = false;
        }
    });

    $(".admin-left").bind('mouseenter', function () {
        timeOutId = setTimeout(function () {
            $(".admin-left").stop(false, true).removeClass("change-left2");
            $(".admin-left>div:nth-child(2)").stop(false, true).addClass("change-left1");
            $(".admin-left>div a span").stop(false, true).show();
        }, 100);
    });

    $(".admin-left").bind('mouseleave', function () {
        if (i) {
            $(".admin-left").addClass("change-left2");
            $(".admin-left>div:nth-child(2)").removeClass("change-left1");
            $(".admin-left>div a span").hide();
        }
    });

});




// 左侧下拉菜单
$(function () {

    $(".admin-left>div:nth-child(2) li>a").click(function () {
        $(this).find(".change-direction1").toggleClass("change-direction2");
        $(this).next().toggle();
        $(this).parent().siblings().find("a").find(".change-direction1").removeClass("change-direction2");
        $(this).parent().siblings().find(".next-menu").hide();
    });

})