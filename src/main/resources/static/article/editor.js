$(function() {
	// 输入框
	var E = window.wangEditor;
	var editor1 = new E('#article_con');
	/*
	 * editor1.customConfig.menus = [ 'head', // 标题 'bold', // 粗体 'fontSize', //
	 * 字号 'fontName', // 字体 'italic', // 斜体 'underline', // 下划线 'strikeThrough', //
	 * 删除线 'foreColor', // 文字颜色 'backColor', // 背景颜色 'link', // 插入链接 'list', //
	 * 列表 'justify', // 对齐方式 'quote', // 引用 'emoticon', // 表情 'image', // 插入图片
	 * 'table', // 表格 'video', // 插入视频 'code', // 插入代码 'undo', // 撤销 'redo' //
	 * 重复 ];
	 */

	editor1.customConfig.lang = {
		'设置标题' : 'title',
		'正文' : 'p',
		'链接文字' : 'link text',
		'链接' : 'link',
		'上传图片' : 'upload image',
		'上传' : 'upload',
		'创建' : 'init'
	// 还可自定添加更多
	};

	// editor1.customConfig.pasteIgnoreImg = true;
	
	editor1.customConfig.colors = [ '#000000', '#eeece0', '#1c487f', '#4d80bf',
			'#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff' ];
	editor1.customConfig.emotions = [
			{
				// tab 的标题
				title : '默认',
				// type -> 'emoji' / 'image'
				type : 'image',
				// content -> 数组
				content : [
						{
							alt : '[坏笑]',
							src : 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
						},
						{
							alt : '[舔屏]',
							src : 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
						} ]
			}, {
				// tab 的标题
				title : 'emoji',
				// type -> 'emoji' / 'image'
				type : 'emoji',
				// content -> 数组
				content : [ '😀', '😃', '😄', '😁', '😆' ]
			} ];

	// 图片
	// 隐藏“网络图片”tab
	// editor.customConfig.showLinkImg = false;

	// 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
	editor1.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
	editor1.customConfig.uploadImgServer = '/articleImage'; // 上传图片到服务器

//	textarea
	var $text1 = $('#article_con2')
	
	//
	editor1.customConfig.onfocus = function() {
		
	};
	editor1.customConfig.onblur = function(html) {
		// html 即编辑器中的内容
		
	};
	
	// 字数
var words_max = $(".max-words").text();
var nw = $(".now-words");
	editor1.customConfig.onchange = function(html) {
//		-->textarea
		$text1.val(html)		
	}
	
	editor1.create();
	
//	修改---> 后台内容
	
	
	
	
	
	
//	--->textarea  初始化
//	// 字数 内容同步  无html		
	$("#article_con").bind("keyup", function() {
		$text1.val(editor1.txt.html());
		var con=editor1.txt.text();
		var con2=con.replace(/&nbsp;/g, "").replace(/&amp;/g, "").trim();
		var con_length=con2.length;
		nw.text(con_length);
		if(con_length>=words_max){
			nw.css("color", "red");
			$(".over-words").show();
		}else {
			nw.css("color", "black");
			$(".over-words").hide();
		}
	});
	
	
//	内容字数 初始化
	$text1.val(editor1.txt.html());
	var con=editor1.txt.text();
	var con2=con.replace(/&nbsp;/g, "").replace(/&amp;/g, "").trim();
	var con_length=con2.length;
	nw.text(con_length);	

})
