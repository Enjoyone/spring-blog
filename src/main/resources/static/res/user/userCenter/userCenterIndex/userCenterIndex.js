$(function () {

    $(".submit-btn").click(function () {

        var userName = $('[name="userName"]').val();
        var name = $('[name="name"]').val();
        var gender = $('[name="gender"]').val();
        //
        // var yearNum = $('[name="yearNum"]').val();
        // var monthNum = $('[name="monthNum"]').val();
        // var dayNum = $('[name="dayNum"]').val();
        // var birth = yearNum + '-' + monthNum + '-' + dayNum;
        var introduction = $('[name="introduction"]').val();

        $.ajax({
            type: "post",
            url: "/changeInfo",
            data: {
                name: name,
                gender: gender,
                userName: userName,
                introduction: introduction
            },
            datatype: "json",
            success: function (data) {
                var result = null;
                if (data !== "-1") {
                    result = "修改成功！"
                } else {
                    result = "修改失败！"
                }

                $(".result").html("");
                $(".result").html(result);
                $(".result").show();


                var sec = 3;
                setInterval(function () {
                    sec--;
                    if (sec < 0) {
                        window.location.href = "/login";
                    }
                }, 500);
            }
        });

    });

});
