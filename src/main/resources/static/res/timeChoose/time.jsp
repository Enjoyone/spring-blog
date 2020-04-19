<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%--%>
<%--    String path = request.getContextPath();--%>
<%--    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";--%>
<%--%>--%>

<html>
<head>
<%--    <base href="<%=basePath%>">--%>
    <title>time</title>
</head>
<body>

    <div class="form-inline ">
        <label>
            <select class="yearNum form-control" name="yearNum">
            </select>
            <span>年</span>
            <select class="monthNum form-control " name="monthNum">
            </select>
            <span>月</span>
            <select class="dayNum form-control" name="dayNum">
            </select>
            <span>日</span>
        </label>

    </div>


<script src="static/js/jquery-3.3.1.min.js"></script>
<script>
    $(function () {

        var date = new Date();
        var nowYear = date.getFullYear(); //获取当前的年
        var limitedAge = 5;
        for (var i = nowYear - limitedAge; i >= nowYear - 100; i--) {
            $(".yearNum").append("<option value=" + i + ">" + i + "</option>");
        }
        for (var i = 1; i <= 12; i++) {
            $(".monthNum").append("<option value=" + i + ">" + i + "</option>");
        }
        for (var i = 1; i <= 28; i++) {
            $(".dayNum").append("<option value=" + i + ">" + i + "</option>");
        }


        $(".yearNum,.monthNum").change(function () {
            var year = $(".yearNum").val();
            var month = $(".monthNum").val();
            var days = null;
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 ||
                month == 12) {
                days = 31;
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                days = 30;
            } else {
                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { // 判断是否为润二月
                    days = 29;
                } else {
                    days = 28;
                }
            }
            $(".dayNum").empty();
            for (var i = 1; i <= days; i++) {
                $(".dayNum").append("<option value=" + i + ">" + i + "</option>");
            }

        })

    })


</script>


</body>
</html>
