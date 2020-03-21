
// 评论框
$(function() {
	$(".to-comment input").focus(function() {
		$(".to-comment>div:nth-child(2)").show();
	});
	$(".to-comment .cancel").click(function() {
		$(".to-comment>div:nth-child(2)").hide();
	})
	
//	字数
//words
	$(".to-comment input").bind("keyup blur",function() {
			$(this).val($(this).val().substring(0, 50));
			$(".to-comment .words").html($(this).val().length);
			if ($(this).val().length >= 50) {
				$(".to-comment .words").css("color", "red");
			} else {
				$(".to-comment .words").css("color", "black");
			}
	});
	
	$(".to-comment .sub").click(function() {
		var con=$(".to-comment input").val();
		var articleID=$(".articleID").text();
		var addLevel="L1";
		console.log(articleID);
		console.log(con);
		console.log(addLevel);
		$.ajax({
			type : "post",
			url : "addComment",
			data : {
				addLevel:addLevel,
				articleID : articleID,
				con:con
			},
			datatype : "json",
			success : function(data) {
				console.log(data);
				var result = $("#result");
				if (data != "-1") {
					result.html("评论成功！");
					result.addClass("badge-primary");
					result.show();

					var sec = 1;
					setInterval(function(){
						 sec--;
						    if (sec<0) {
						    	window.location.reload();
						    }
					}, 500);	
					
				} else {
					result.html("评论失败！");
					result.addClass("badge-danger");
					result.show();
				}
			}
			
		});
		
	});
	
});