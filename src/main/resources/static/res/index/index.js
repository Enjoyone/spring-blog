
    // 顶部
    $(function () {
        $(window).scroll(function () {
            //创建一个变量存储当前窗口下移的高度
            var scroTop = $(window).scrollTop();
            //判断当前窗口滚动高度
            //如果大于100，则显示顶部元素，否则隐藏顶部元素
            if (scroTop > 100) {
                $('.back-top').fadeIn(500);
            } else {
                $('.back-top').fadeOut(500);
            }
        });

        $('.back-top').mouseover(function () {
            $(".ok").hide();
            $(".back-top-word").css("display", "flex")
        });
        $('.back-top').mouseleave(function () {
            $(".ok").show();
            $(".back-top-word").css("display", "none")
        });
        //为返回顶部元素添加点击事件
        $('.back-top').click(function () {
            //将当前窗口的内容区滚动高度改为0，即顶部
            $("html,body").animate({
                scrollTop: 0
            }, "fast");
        });


    });
