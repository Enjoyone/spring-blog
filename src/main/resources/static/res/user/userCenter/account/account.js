$(function () {

    $(".aa .submit").click(function () {
        var type = $(this).parent().siblings(".modal-body").find(".type").text();
        // var content = $("[name='content']").val();
        var content = $(this).parent().siblings(".modal-body").find("input").val();
        $.ajax({
            type: "post",
            url: "changeAccount",
            data: {
                changeType: type,
                content: content

            },
            datatype: "json",
            success: function (data) {
                console.log(data);
                if (data === "1") {
                    $(".result").html("");
                    $(".result").html("修改成功！");
                    $(".result").show();
                    var sec = 3;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            window.location.reload();
                        }
                    }, 500);
                } else {
                    $(".result").html("");
                    $(".result").html("修改失败！");
                    $(".result").show();
                }

            }
        });
    });

    $("#changePWD .submit").click(function () {
        var old = $("#old_password").val();
        var new1 = $("#new_password1").val();
        var new2 = $("#new_password2").val();

        if (new1 !== new2) {
            $(".pwd-warn").show();
            return false;
        }
        $.ajax({
            type: "post",
            url: "changePWD",
            data: {
                PWD: old,
                newPWD: new1

            },
            datatype: "json",
            success: function (data) {
                console.log(data);
                if (data === "1") {
                    $(".pwd-warn").html("");
                    $(".pwd-warn").html("修改成功！");
                    $(".pwd-warn").show();
                    var sec = 2;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            // window.location.reload();
                            window.location.href = "/login";

                        }
                    }, 500);
                } else {
                    $(".pwd-warn").html("");
                    $(".pwd-warn").html("修改失败！");
                    $(".pwd-warn").show();
                }

            }
        });

    });
});



