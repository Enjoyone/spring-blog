 
// 禁用按钮
$(function(){
	$(".allStatus").each(function(){
		var status=$(this).text();
		if(status=="正常"){
			$(this).next().find("input").prop("checked", true);
		}else{
			$(this).next().find("input").prop("checked", false);
		}
	});
	$(".operate input").each(function(){
		if(!$(this).prop("checked")){
			 $(this).next().find(".word").html("启用").css("background","#5FB878");
		}else{
			 $(this).next().find(".word").html("停用").css("background","red"); 
		}
	});
        $(".operate label").click(function () {
        	var now=$(this).parent().parent();
        	var operateCon=null;
        	var userID=$(this).find(".userID").text();
        	if($(this).prev().prop("checked")){		
        		operateCon="lock";
   			 $(this).find(".word").html("启用").css("background","#5FB878"); 
        	}else{       
        		operateCon="unlock";
   			 $(this).find(".word").html("停用").css("background","red");  
        	}
            
            // ajax
        	$.ajax({
				type : "get",
				url : "adminAffair",
				data : {
					operateType:"userStatus",
					operateCon:operateCon,
					userID : userID
				},
				datatype : "text",
				success : function(data) {
					
					if(data!="-1"){
						$(".change-result").html("修改成功！");
						if(data=="1"){
							now.prev().html("正常");
						}
						if(data=="0"){
							now.prev().html("已停用");
						}
					}else{
						$(".change-result").html("修改失败！");		
					}
					
					 $(".change-result").css("top", $(".opertaTD").first().offset().top);
					  $(".change-result").css("left",  $(".opertaTD").first().offset().left-200);
					
					$(".change-result").show();
					
						var sec=2;
					setInterval(
							function() {
								sec--;
								if (sec < 0) {
									$(".change-result").hide();
								}
					}, 1000);
				}
			});
        });

        
     
        
});

// 更多个人介绍
$(function(){
	$(".introduction").find("span").each(function(){
		if($(this).text().length>10){
			$(this).prev().html("...");
		}
	})
	
	$(".introduction").mouseenter(function(){
		var con=$(this).find("span").text();
		$(".intro-more").text(con);
		   $(".intro-more").css("top", $(this).offset().top);
		   $(".intro-more").css("left", $(this).offset().left-150);
		if(con.length>8){
			$(".intro-more").show();
		}
			
	});
	
	$(".introduction").mouseleave(function(){
		$(".intro-more").hide();	
	});


});

// showThis 个人信息框

$(function(){
	$(".showThis").click(function(e){
		e.stopPropagation();
		var userID=$(this).text();
		$('#back').show();
		$(".all-info").show();
		$(".all-info").css("top", $(this).parent().parent().parent().offset().top);
		$(".all-info").css("left",  $(this).offset().left+200);
		
		$(".all-info").find("."+userID).show().siblings().hide();
	});
		$("#back,.close").click(function(e) {   
			$('#back').hide();
			$(".all-info").hide();
		});
});

// 管理员界面 判定
$(function(){
	
	$(".type").each(function(){
		if($(this).text()=="超级管理员"){
			$(this).siblings(".operateTD").hide();
			
		}	
	});
});







