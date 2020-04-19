$(function(){
	$(".left-typeName label,a").click(function(){
		$(this).find("input").prop("checked",true);
		var num=$(this).find(".includeNum").text();
		if (num==0) {
			return false;
		}
		var articleTypeID=$(".left-typeName").find("input:checked").val();
		var userID=$(".userID").text();
		console.log(userID);
		console.log(articleTypeID);
		$.ajax({
			type : "get",
			url : "userIndex",
			data : {
				userID:userID,
				articleTypeID : articleTypeID
			},
			datatype : "json",
			success : function(data) {
				var p=eval(data);
				console.log(p);
				$("#article_all").empty();
				for (var int = 0; int < p.length; int++) {
					var addCon="";
					addCon+='<div class="article-per">';
					addCon+='<div class="article-per-con">';
					addCon+='<a href="articleShow?articleID='+p[int].articleID+'>'+p[int].articleTitle+'<span class="badge badge-primary">'+p[int].articleType.articleTypeName+'</span></a>';
					addCon+='<div class="articleCon">'+p[int].articleContent+'</div>';
					addCon+='<div class="articleInfo">';
					addCon+='<span>赞 '+p[int].supportNum+'</span><span>评论'+p[int].commentNum+'</span>';
					addCon+='<span>时间'+ p[int].launchTime+'</span>';
					addCon+='</div></div></div>';
					$("#article_all").append(addCon);
				}
				
				
			}
		});
		
		
	});
	
	
	
});