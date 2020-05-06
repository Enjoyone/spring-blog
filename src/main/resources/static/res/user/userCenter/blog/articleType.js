//文章类型 
$(function () {
    //添加
    $("#addType .submit").click(function () {
        var newType = $("#addType input").val();
        var a = true;
        $(".articleTypeName").each(function () {
            var old = $(this).find("a").text();
            if (newType === old) {
                $(".result").html("已存在！").show();
                a = false;
            }
        });

        if (a) {
            $.ajax({
                type: "get",
                url: "addType",
                data: {
                    typeName: newType
                },
                datatype: "json",
                success: function (data) {
                    if (data != "-1") {
                        $(".result").html("添加成功！").show();
                        var sec = 1;
                        setInterval(function () {
                            sec--;
                            if (sec < 0) {
                                window.location.reload();
                            }
                        }, 1000);
                    } else {
                        $(".result").html("添加失败！").show();
                    }

                }
            });
        }

    });

    //updateType

    $(".chengeTypeNameBtn").click(function () {
        var typeID = $(this).parent().siblings(".articleTypeName").find("span").text();
        var name = $(this).parent().siblings(".articleTypeName").find("a").text();
        $("#changeTypeName h3").html(name);
        $("#changeTypeName .old-typeID").val(typeID);
    });


    $("#changeTypeName .submit").click(function () {
        var newTypeName = $("#changeTypeName .newTypeName").val();
        var typeID = $("#changeTypeName .old-typeID").val();
        $.ajax({
            type: "get",
            url: "updateType",
            data: {
                typeID: typeID,
                newTypeName: newTypeName
            },
            datatype: "json",
            success: function (data) {
                if (data == "1") {
                    $(".result").html("");
                    $(".result").html("修改成功!").show();

                    var sec = 2;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            window.location.reload();
                        }
                    }, 1000);
                } else {
                    $(".result").html("");
                    $(".result").html("修改失败!").show();
                }

            }
        });

    });


// delete type
    $(".delete-articleType").click(function () {
        var typeID = $(this).parent().siblings(".articleTypeName").find("span").text();
        var name = $(this).parent().siblings(".articleTypeName").find("a").text();
        var articleNum = $(this).parent().siblings(".articleNum").text();

        $("#deleteType .deleteCon span").html(name);
        $("#deleteType .old-typeID").val(typeID);
        $("#deleteType .typeNum").val(articleNum);

        $(".result").hide();
        $(".cannotDelete").hide();

    });

    $("#deleteType .submit").click(function () {
        var articleNum = $("#deleteType .typeNum").val();
        var typeID = $("#deleteType .old-typeID").val();
        if (articleNum > 0) {
            $(".cannotDelete").show();
            return false;
        }

        $.ajax({
            type: "get",
            url: "deleteType",
            data: {
                typeID: typeID
            },
            datatype: "json",
            success: function (data) {
                if (data === "1") {
                    $(".result").html("");
                    $(".result").html("删除成功！").show();
                    var sec = 2;
                    setInterval(function () {
                        sec--;
                        if (sec < 0) {
                            window.location.reload();
                        }
                    }, 1000);
                }
                if (data === "-1") {
                    $(".cannotDelete").show();
                    // var sec = 2;
                    // setInterval(function () {
                    //     sec--;
                    //     if (sec < 0) {
                    //         window.location.reload();
                    //     }
                    // }, 1000);
                }
                if (data === "0") {
                    $(".result").html("");
                    $(".result").html("删除失败！").show();
                }

                var sec = 2;
                setInterval(function () {
                    sec--;
                    if (sec < 0) {
                        $(".result").hide();
                    }
                }, 1000);

            }
        });
    });


    // changeTypeStatus
    $(".changeTypeStatus").click(function () {
        var typeID = $(this).parent().siblings(".articleTypeName").find("span").text();
        $.ajax({
            type: "get",
            url: "changeTypeStatus",
            data: {
                typeID: typeID
            },
            datatype: "json",
            success: function (data) {
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


//    禁用类型


// typeInfo
    $(".typeInfo").click(function () {
        var userID = $(".userID").text();
        var articleTypeID = $(this).parent().parent().siblings(".articleTypeName").find("span").text();
        $(".typeInfo tbody").empty();
        //console.log(userID);
        //console.log(articleTypeID);
        $.ajax({
            type: "get",
            url: "userIndex",
            data: {
                userID: userID,
                articleTypeID: articleTypeID
            },
            datatype: "json",
            success: function (data) {
                var p = eval(data);
                console.log(p);
                for (var int = 0; int < p.length; int++) {
                    var articlePublic = p[int].articlePublic == true ? "公开" : "不公开";
                    var articleComment = p[int].articleComment == true ? "可评论" : "不可评论";
                    var articleShare = p[int].articleShare == true ? "可分享" : "不可分享";
                    var articleBlock = p[int].articleBlock == true ? "被屏蔽" : "正常";
                    var addCon = "";
                    addCon += '<tr>';
                    addCon += '<td><a href="articleShow?articleID=' + p[int].articleID + '>' + p[int].articleTitle + '</a></td>';
                    addCon += '<td>' + p[int].launchTime + '</td>';
                    addCon += '<td>' + p[int].supportNum + '</td>';
                    addCon += '<td>' + p[int].commentNum + '</td>';
                    addCon += '<td>' + articlePublic + articleComment + articleShare + '</td>';
                    addCon += '<td>' + articleBlock + '</td>';
                    addCon += '</tr>';
                    console.log(addCon);
                    $(".typeInfo tbody").append(addCon);
                }
                $(".typeInfo").show();
            }
        });

    });

    $(".close-this").click(function () {
        $(this).parent().hide();
    });
    $(".close-this-delete").click(function () {
        $(this).parent().parent().hide();
    });

    $(".type-name").click(function () {
        $(".type-detail").show();
    });

    $(".type-name-close").click(function () {
        $(".type-detail").hide();
    });

    $(".qwe .nav-item").click(function () {
        $(this).siblings().removeClass("border-ltb");
        $(this).siblings().addClass("border-r");
        $(this).removeClass("border-r");
        $(this).addClass("border-ltb")
    })

})
