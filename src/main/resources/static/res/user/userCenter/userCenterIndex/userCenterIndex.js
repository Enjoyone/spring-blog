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

        // var operateType = "changeInfo";
        // var info = {
        // 	"userID" : userID,
        // 	"userName" : username,
        // 	"userGender" : userGender,
        // 	"birth" : birth,
        // 	"introduction" : introduction
        // };
        // var jsonData = JSON.stringify(info);

        $.ajax({
            type: "post",
            url: "changeInfo",
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
                $(".change-status-con").html(result);
                $(".change-status").show();


                var sec = 1;
                setInterval(function () {
                    sec--;
                    if (sec < 0) {
                        window.location.reload();
                    }
                }, 500);
            }
        });

    });

});
