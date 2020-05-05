$(function () {
    // 1. 立即提交
    $(".save").click(function () {

        var articleTitle = $('[name="articleTitle"]').val();
        var type = $('[name="type"]').val();
        var content = $('#content').val();
        var articleID = $(".articleID").val();
        $.ajax({
            type: "post",
            url: "modifyArticle",
            data: {
                articleTitle: articleTitle,
                type: type,
                content: content,
                articleID: articleID
            },
            datatype: "json",
            success: function (data) {
                if (data !== -1) {
                    $(".result").show();
                    $(".result").html("保存成功！");
                    var sec = 2;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            window.location.href = "showArticle?articleID="
                                + data;
                        }
                    }, 1000);

                } else {
                    $(".result").show();
                    $(".result").html("保存失败！");

                    var sec = 3;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            $(".result").hide();
                        }
                        $(this).stop();
                    }, 1000);


                }
            }

        });
    });

});