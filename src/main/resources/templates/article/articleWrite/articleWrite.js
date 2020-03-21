// article_oprate
$(function() {
	// title 字数
	$("#article_title").bind("keyup", function() {
		$(this).val($(this).val().substring(0, $(".title-max-words").text()));
		$(".title-words").html($(this).val().length);
		if ($(this).val().length >= $(".title-max-words").text()) {
			$(".title-words").css("color", "red");
		} else {
			$(".title-words").css("color", "black");
		}
	});
	// 字数 初始化
	$(".title-words").html($("#article_title").val().length);

	// 初始化
	$(".article_oprate input[type=checkbox]").prop("checked", true);
	$(".article_oprate label").find("span:first-child").css("background",
			"#5FB878");
	$(".article_oprate label").find("span:last-child").css({
		"opacity" : "1",
		"border-color" : "#5FB878"
	});

	$(".article_oprate label").mouseover(function() {
		if ($(this).prev().prop("checked")) {

		} else {
			$(this).find("span:last-child").css("opacity", "0.6");
		}
	});
	$(".article_oprate label").mouseleave(function() {
		if ($(this).prev().prop("checked")) {

		} else {
			$(this).find("span:last-child").css("opacity", "0.3");
		}
	});

	$(".article_oprate input").click(
			function() {
				if ($(this).attr("id") == "public") {
					if ($(this).prop("checked")) {

					} else {
						$("#comment").prop("checked", false);
						$("#share").prop("checked", false);
					}
				} else {

					if ($("#public").prop("checked")) {
						if ($(this).prop("checked")) {
							$(this).prop("checked", true);
						} else {
							$(this).prop("checked", false);
						}
					} else {
						$("#comment").prop("checked", false);
						$("#share").prop("checked", false);
					}
				}

				// 采用循环，整体改变
				$(".article_oprate-p input[type=checkbox][checked]").each(
						function() {
							$(this).next().find("span:first-child").css(
									"background", "#5FB878");
							$(this).next().find("span:last-child").css(
									"opacity", "1");
						});
				$(".article_oprate-p input[type=checkbox]").not(":checked")
						.each(
								function() {
									$(this).next().find("span:first-child")
											.css("background", "lightgray");
									$(this).next().find("span:last-child").css(
											"opacity", "0.3");
								});
			});
});

// 新建类型

$(function() {
	var typeNum = 0;
	$('[name="article_type"]').each(function() {
		$(this).children("option").each(function() {
			typeNum = typeNum + 1;
		});
	});
	if (typeNum > 2) {
		$('[name="article_type"]').change(function() {
			var data = $(this).val();
			if (data === "0") {
				$(".add-articleType").show();
			}
		});
	} else {
		$(".noType").show();
		$(".add-articleType").show();
	}

	$(".close-type").click(function() {
		$(".add-articleType").hide();
	});

	$('.add-type').click(
			function() {
				var eq = false;
				var con = $('[name="new_type_name"]').val();
				$('[name="article_type"]').each(function() {
					$(this).children("option").each(function() {
						var n = $(this).text(); // 每一个option
						if (n === con) {
							eq = true;
						} else {
						}
					});
				});

				if (eq) {
					$(".type-warning").show();
				} else {
					$(".type-warning").hide();
					$.ajax({
						type : "post",
						url : "addArticleType",
						data : {
							articleTypeName : con
						},
						datatype : "json",
						success : function(data) {
							console.log(data);
							var result = $(".addResult");
							if (data != "-1") {
								$(".type-warning").hide();
								result.html("已添加！");
								result.show();
								//

								$(".add-articleType").hide();
								// 刷新文章类型

								$('[name="article_type"]').prepend(
										"<option value='" + data + "'>" + con
												+ "</option>");
								$('[name="article_type"]').val(data);
								$(".add-articleType").hide();

							} else {
								result.html("添加失败！");
								result.show();
							}
						}
					});
				}
			});
});

// 提交验证

$(function() {

	function artilceData(articleDraft) {
		var articleID = $(".articleID").text();
		var article_title = $('[name="article_title"]');
		var articleType = $('[name="article_type"]');
		// var article_con = $('#article_con');

		var a = new Array();

		$('[name="operateType"]:checked').each(function() {
			a.push(parseInt($(this).val()));
		});

		var article = {
			articleID : articleID,
			articleTitle : article_title.val(),
			articleType : articleType.val(),
			articleContent : $("#article_con2").val(),
			operate : a,
			articleDraft : articleDraft

		}
		var jsonData = JSON.stringify(article);

		return jsonData;
	}
	;

	// 1. 立即提交
	$(".submit-button").click(function() {
		ajaxArticle("0");
	});

	// 2. 存稿
	$(".draft-button").click(function() {
		ajaxArticle("1");
	});

	function ajaxArticle(isdraft) {
		var isExited = $(".isExited").text();
		if(isExited==1){
			isExited="1";
		}
		console.log(isExited);
		var jsonData = artilceData(isdraft);
		$.ajax({
			type : "post",
			url : "write",
			data : {
				isExited : isExited,
				article : jsonData
			},
			datatype : "json",
			success : function(data) {
				// -1 保存失败 1 show article 0 back userCenter
				console.log(data);
				if (data!=0&&data!=-1) {
					$(".result").show();
					$(".result").html("保存成功！");
					var sec = 2;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							window.location.href = "articleShow?articleID="
									+ data;
						}
					}, 1000);

				}
				if (data == 0) {
					$(".result").show();
					$(".result").html("保存成功！");
					var sec = 2;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							window.location.href = "userCenter";
						}
					}, 1000);

				}
				if (data == -1) {
					$(".result").show();
					$(".result").html("保存失败！");

					var sec = 3;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							$(".result").hide();
						}
						$(this).stop();
					}, 1000);
				}

			}
		});
	}

});