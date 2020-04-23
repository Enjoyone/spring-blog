$(function () {

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
                newPWD: old,
                PWD: new1

            },
            datatype: "json",
            success: function (data) {
                console.log(data);
                if (data == "1") {
                    $(".pwd-warn").html("");
                    $(".pwd-warn").html("修改成功！");
                    $(".pwd-warn").show();
                    var sec = 1;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            window.location.reload();
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