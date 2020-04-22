$(function() {
	$(".page-pre").click(
			function() {
				var nowIndex = $(".pagination .active");
				if (!$(this).parent().next().hasClass("active")) {
					nowIndex.prev().addClass("active").siblings().removeClass(
							"active");
				}
				var Index = $(".pagination .active").find("a").text();
				toPage(Index);
			});
	$(".to-page").click(function() {
		$(this).parent().addClass("active").siblings().removeClass("active");
		var Index = $(".pagination .active").find("a").text();
		toPage(Index);
	});
	
	$(".page-next").click(
			function() {
				var nowIndex = $(".pagination .active");
				if (!$(this).parent().prev().hasClass("active")) {
					nowIndex.next().addClass("active").siblings().removeClass(
							"active");
				}
				var Index = $(".pagination .active").find("a").text();
				toPage(Index);
			});

	function toPage(pageIndex) {
		console.log(pageIndex);
		$.ajax({
			type : "get",
			url : "adminWeb",
			data : {
				web:"article",
				changeBack:"1",
				pageIndex : pageIndex
			},
			datatype : "json",
			success : function(data) {
				var p=eval(data);
				$("tbody").empty();
				for (var int = 0; int < p.length; int++) {
					var articlePublic=p[int].articlePublic==true?"公开":"不公开";
					var articleComment=p[int].articleComment==true?"可评论":"不可评论";
					var articleShare=p[int].articleShare==true?"可分享":"不可分享";
					var articleBlock=p[int].articleBlock==true?"被屏蔽":"正常";
					console.log(p[int].userInfo.userID);
					var con="";
					con+= "<tr>";
					con+="<td class=\"choose1\"><input type=\"checkbox\" class=\"choose\"id=\"choose\"><label for=\"choose\"></label></td>";
					con+="<td>"+Number(int+1)+"</td>" ;
					con+="<td>"+p[int].articleID+"</td>" ;
					con+="<td><a href=\"articleShow?articleID="+p[int].articleID+"\">"+p[int].articleTitle+"</a></td>";
					con+="<td>"+p[int].articleType.articleTypeName+"</td>";
					con+='<td><a href="userIndex?userID="'+p[int].userInfo.userID+'>'+p[int].userInfo.userID+'</a></td>';
					con+='<td>'+p[int].latestChangeTime+'</td>' ;
					con+='<td>'+p[int].supportNum+'</td>';
					con+='<td>'+p[int].commentNum+'</td>';
					con+="<td>";
					con+="<span class=\"badge badge-pill badge-primary\">"+articlePublic+"</span>";
							con+="<span class=\"badge badge-pill badge-success\">"+articleComment +"</span>";
							con+="<span class=\"badge badge-pill badge-info\">"+articleShare+"</span>";

							con+="</td>" ;
					con+='<td>'+articleBlock+'</td>';
					con+="</tr>";
					
					$("tbody").append(con);
				};
			}
		});
		
	};

});
