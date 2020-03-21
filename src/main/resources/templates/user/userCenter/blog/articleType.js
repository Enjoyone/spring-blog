//文章类型 
$(function() {
	$("#addType .submit1").click(function() {
		var newType = $("#addType input").val();
		var a = true;
		$(".articleTypeName").each(function() {
			var old = $(this).find("a").text();
			if (newType == old) {
				$(".modal-body span").html("已存在！").show();
				a = false;
			}
		});
		if (a) {
			$.ajax({
				type : "post",
				url : "addArticleType",
				data : {
					articleTypeName : newType
				},
				datatype : "json",
				success : function(data) {
					if (data != "-1") {
						$(".modal-body span").html("添加成功！").show();
					}
					var sec = 1;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							window.location.reload();
						}
					}, 1000);
				}
			});
		}

	});
	
	//updateType
	$(".chengeTypeNameBtn").click(function() {
		var typeID=$(this).parent().siblings(".articleTypeName").find("span").text();
		var name=$(this).parent().siblings(".articleTypeName").find("a").text();
		$("#changeTypeName h3").html(name);
		
		$("#changeTypeName .submit").click(function() {
			var newTypeName=$("#changeTypeName input").val();
			$.ajax({
				type : "post",
				url : "updateType",
				data : {
					articleTypeID:typeID,
					newTypeName : newTypeName
				},
				datatype : "json",
				success : function(data) {
					if (data == "1") {
						$("#changeTypeName .modal-footer").append("修改成功!");
						$("#changeTypeName .modal-footer").show();
						var sec = 1;
						setInterval(function() {
							sec--;
							if (sec < 0) {
								window.location.reload();
							}
						}, 1000);
					}else{
						$("#changeTypeName .modal-footer").append("修改失败!");
						$("#changeTypeName .modal-footer").show();
					}
					
				}
			});
		});
		
	});
	// delete type
	$(".delete-articleType").click(function() {
		
		var num=$(this).parent().prev().find(".info-type>span:nth-child(1)").text();
		var typeID=$(this).parent().siblings(".articleTypeName").find("span").text();
		var name=$(this).parent().siblings(".articleTypeName").find("a").text();
		if(num>0){
			$(".cannotDelete").css("top", $(this).offset().top);
			$(".cannotDelete").css("left",  $(this).offset().left+80);
			$(".cannotDelete").show();
			var sec = 1;
			setInterval(function() {
				sec--;
				if (sec < 0) {
					$(".cannotDelete").stop(false, true).hide();
				}
			}, 1000);
		}else{
			
			$(".deleteCon").show();
			$(".deleteCon").css("top", $(this).offset().top);
			$(".deleteCon").css("left",  $(this).offset().left+100);
			$(".deleteCon span").text(name);
		}
		$(".deleteCon .cancel").click(function(){
			$(".deleteCon").hide();
		});
		// 确认删除！
		$(".deleteCon .submit").click(function(){
			console.log(typeID);
			console.log(name);
			$.ajax({
				type : "get",
				url : "deleteType",
				data : {
					articleTypeID : typeID
				},
				datatype : "json",
				success : function(data) {
					if (data == "1") {
						$(".deleteCon").empty();
						$(".deleteCon").html("删除成功！").show();
						var sec = 1;
						setInterval(function() {
							sec--;
							if (sec < 0) {
								window.location.reload();
							}
						}, 1000);
					}else{
						$(".deleteCon").empty();
						$(".deleteCon").html("删除失败！").show();
					}
					
					var sec = 2;
					setInterval(function() {
						sec--;
						if (sec < 0) {
							$(".deleteCon").hide();
						}
					}, 1000);
					
				}
			});
		});
		

		
	});
// typeInfo
	$(".typeInfo").click(function(){
		var userID=$(".userID").text();
		var articleTypeID=$(this).parent().parent().siblings(".articleTypeName").find("span").text();
		$(".typeInfo tbody").empty();
		//console.log(userID);
		//console.log(articleTypeID);
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
				for (var int = 0; int < p.length; int++) {
					var articlePublic=p[int].articlePublic==true?"公开":"不公开";
					var articleComment=p[int].articleComment==true?"可评论":"不可评论";
					var articleShare=p[int].articleShare==true?"可分享":"不可分享";
					var articleBlock=p[int].articleBlock==true?"被屏蔽":"正常";
					var addCon="";
					addCon+='<tr>';
					addCon+='<td><a href="articleShow?articleID='+p[int].articleID+'>'+p[int].articleTitle+'</a></td>';
					addCon+='<td>'+p[int].launchTime+'</td>';
					addCon+='<td>'+p[int].supportNum+'</td>';
					addCon+='<td>'+p[int].commentNum+'</td>';
					addCon+='<td>'+articlePublic+articleComment+articleShare+'</td>';
					addCon+='<td>'+articleBlock+'</td>';
					addCon+='</tr>';
					console.log(addCon);
					$(".typeInfo tbody").append(addCon);
				}
				$(".typeInfo").show();
			}
		});
		
	});
	
	$(".close-this").click(function() {
		$(this).parent().hide();
	});
	$(".close-this-delete").click(function() {
		$(this).parent().parent().hide();
	});

	$(".type-name").click(function() {
		$(".type-detail").show();
	});

	$(".type-name-close").click(function() {
		$(".type-detail").hide();
	});

	$(".qwe .nav-item").click(function() {
		$(this).siblings().removeClass("border-ltb");
		$(this).siblings().addClass("border-r");
		$(this).removeClass("border-r");
		$(this).addClass("border-ltb")
	})

})
