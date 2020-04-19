//文章 

$(function() {
	// 删除

	$(".delete-article").click(
			function() {
				var title = $(this).parent().siblings(".title-pre").find(
						".articleTitle").text();
				var ID = $(this).parent().siblings(".title-pre").find("span")
						.text();
				$(".deleteID").text(ID);
				$("#delete-article-warning .title-con").text(title)
				$("#delete-article-warning").show();
				$("#delete-article-warning").css("top",
						$(this).offset().top - 200);
				$("#delete-article-warning").css("left",
						$(this).offset().left - 800);
				$('#back').show();
			});
	$("#back,.close-this").click(function() {
		$("#delete-article-warning").hide();
		$('#back').hide();
	});

	$("#delete-article-warning .delete-button").click(function() {
		var articleID = $(".deleteID").text();
		$.ajax({
			type : "get",
			url : "delete",
			data : {
				articleID : articleID
			},
			datatype : "json",
			success : function(data) {
				if (data != "-1") {
					$("#operateResult").append("删除成功！");
					$("#delete-article-warning").hide();

				} else {
					$("#operateResult").append("删除失败！");
					$("#delete-article-warning").hide();
				}
				$("#operateResult").show();

				var sec = 2;
				setInterval(function() {
					sec--;
					if (sec < 0) {
						$("#operateResult").hide();
						$('#back').hide();
						window.location.reload();
					}
				}, 500);
			}
		});

	});

	// 文章申诉
	var articleID=null;
	$(".to-appeal").click(
			function() {
				$('#back').show();
				var title = $(this).parent().siblings(".title-pre").find(
						".articleTitle").text();
				$("#appeal>div:nth-child(1)>span:nth-child(2)").text(title);
				
				articleID=$(this).parent().siblings(".title-pre").find("span").text();

				$("#appeal").show();
				$("#appeal").css("top", $(this).offset().top - 150);
				$("#appeal").css("left", $(this).offset().left - 1000);
			})
	$("#appeal .appeal-submit").click(function() {
		$('#back').show();
		var con = $(".appeal-con2").val();
		
		console.log(articleID);
		console.log(con);
		$.ajax({
			type : "post",
			url : "userCenterAffair",
			data : {
				operateType:"appealArticle",
				articleID : articleID,
				con:con
			},
			datatype : "json",
			success : function(data) {
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
				setInterval(function() {
					sec--;
					if (sec < 0) {
						$("#operateResult").hide();
						$('#back').hide();
					}
				}, 500);
			}
		});

	})

	$("#back,.appeal-close").click(function() {
		$("#appeal").hide();
		$('#back').hide();
	})

	// 字数
	$("#appeal .appeal-con2").bind("keyup", function() {
		$(this).val($(this).val().substring(0, 50));
		$("#appeal .words").html($(this).val().length);
		if ($(this).val().length >= 50) {
			$("#appeal .words").css("color", "red");
		} else {
			$("#appeal .words").css("color", "black");
		}
	});

});
