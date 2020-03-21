$(function() {
	$("#praise")
			.click(
					function() {
						var praise_img = $("#praise-img");
						var text_box = $("#add-num");
						var praise_txt = $("#praise-txt");
						var num = parseInt(praise_txt.text());
						if (praise_img.attr("src") == ('article/articleShow/support/Images/yizan.png')) {
							$(this)
									.html(
											"<img src='article/articleShow/support/Images/zan.png' id='praise-img' class='animation' />");
							praise_txt.removeClass("hover");
							text_box.show().html(
									"<em class='add-animation'>-1</em>");
							$(".add-animation").removeClass("hover");
							num -= 1;
							praise_txt.text(num);
							support(-1);
						} else {
							$(this)
									.html(
											"<img src='article/articleShow/support/Images/yizan.png' id='praise-img' class='animation' />");
							praise_txt.addClass("hover");
							text_box.show().html(
									"<em class='add-animation'>+1</em>");
							$(".add-animation").addClass("hover");
							num += 1;
							praise_txt.text(num);
							support(+1);
						}
					});

	function support(num) {
		var articleID = $(".articleID").text();
		$.ajax({
			type : "get",
			url : "support",
			data : {
				articleID : articleID
			},
			datatype : "json",
			success : function(data) {
				console.log(data);
				var result = $("#result");
				if (data == "-1") {
					result.html("点赞失败！");
					result.addClass("badge-danger");
					result.show();

					var sec = 2;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							result.hide();
						}
					}, 500);
				} else {

				}
			}
		});

	}

})