//文章 

$(function () {
    // 删除
    $(".delete-article").click(
        function () {
            var title = $(this).parent().siblings(".title-pre").find(
                ".articleTitle").text();
            var articleID = $(this).parent().siblings(".title-pre").find(".hide-id")
                .text();
            $(".title-con").text(title);
            $(".articleID").val(articleID);
        });

    $("#deleteArticle .submit").click(function () {
        var id = $(".articleID").val();
        $.ajax({
            type: "get",
            url: "deleteArticle",
            data: {
                articleID: id
            },
            datatype: "json",
            success: function (data) {
                if (data != "-1") {
                    $(".result").html("");
                    $(".result").html("删除成功！");
                    $(".result").show();
                } else {
                    $(".result").html("");
                    $(".result").html("删除失败！");
                    $(".result").hide();
                }

                var sec = 2;
                setInterval(function () {
                    sec--;
                    if (sec < 0) {
                        window.location.reload();
                    }
                }, 500);
            }
        });
    });


// 文章申诉
    var articleID = null;
    $(".to-appeal").click(
        function () {
            $('#back').show();
            var title = $(this).parent().siblings(".title-pre").find(
                ".articleTitle").text();
            $("#appeal>div:nth-child(1)>span:nth-child(2)").text(title);

            articleID = $(this).parent().siblings(".title-pre").find("span").text();

            $("#appeal").show();
            $("#appeal").css("top", $(this).offset().top - 150);
            $("#appeal").css("left", $(this).offset().left - 1000);
        })
    $("#appeal .appeal-submit").click(function () {
        $('#back').show();
        var con = $(".appeal-con2").val();

        console.log(articleID);
        console.log(con);
        $.ajax({
            type: "post",
            url: "userCenterAffair",
            data: {
                operateType: "appealArticle",
                articleID: articleID,
                con: con
            },
            datatype: "json",
            success: function (data) {
                console.log(data);
                if (data != "-1") {
                    $("#operateResult").append("申诉成功！");
                    $("#appeal").hide();

                } else {
                    $("#operateResult").append("申诉失败！");
                    $("#appeal").hide();
                }
                $("#operateResult").show();

                var sec = 2;
                setInterval(function () {
                    sec--;
                    if (sec < 0) {
                        $("#operateResult").hide();
                        $('#back').hide();
                    }
                }, 500);
            }
        });

    })

    $("#back,.appeal-close").click(function () {
        $("#appeal").hide();
        $('#back').hide();
    })

// 字数
    $("#appeal .appeal-con2").bind("keyup", function () {
        $(this).val($(this).val().substring(0, 50));
        $("#appeal .words").html($(this).val().length);
        if ($(this).val().length >= 50) {
            $("#appeal .words").css("color", "red");
        } else {
            $("#appeal .words").css("color", "black");
        }
    });

})
;
