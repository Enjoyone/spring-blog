$(function() {
	$(".change-user-information").click(
			function() {
				var birth = $(".hide-birth").text();
				var time = new Date(birth);
				$('[name="yearNum"]').val(time.getFullYear());
				$('[name="monthNum"]').val(time.getMonth() + 1);
				$('[name="dayNum"]').val(time.getDate());
				$('[name="introduction"]').val(introduction);
				$(".change_user_information-con").show();
				$(".change_user_information-con").css("top", $(".user-information").offset().top);
				  $(".change_user_information-con").css("left",  $(".user-information").offset().left);
				$('#back').show();
				
			});
	$("#back,.cancel-btn").click(function() {
		$(".change_user_information-con").hide();
		$('#back').hide();
	});

	$(".submit-btn").click(function() {

		var userID = $('[name="userID"]').val();
		var username = $('[name="userName"]').val();
		var userGender = $('[name="userGender"]').val();
		//
		var yearNum = $('[name="yearNum"]').val();
		var monthNum = $('[name="monthNum"]').val();
		var dayNum = $('[name="dayNum"]').val();
		var birth = yearNum + '-' + monthNum + '-' + dayNum;
		var introduction = $('[name="introduction"]').val();

		var operateType = "changeInfo";
		var info = {
			"userID" : userID,
			"userName" : username,
			"userGender" : userGender,
			"birth" : birth,
			"introduction" : introduction
		};
		var jsonData = JSON.stringify(info);

		$(".change_user_information-con").hide(100);

		$.ajax({
			type : "post",
			url : "userCenterAffair",
			data : {
				"operateType" : operateType,
				"info" : jsonData
			},
			datatype : "json",
			success : function(data) {
				var result=null;
				if(data!=-1){
					result="修改成功！"
				}else{
					result="修改失败！"
				}
				$(".change-status-con").html(result);
				$(".change-status").show();
				
			
				var sec = 1;
				setInterval(function(){
					 sec--;
					    if (sec<0) {
					    	window.location.reload();
					    }
				}, 500);				
			}
		});

	});
	$(".change-status button").click(function() {
		$(".change-status").hide();
	})

});
