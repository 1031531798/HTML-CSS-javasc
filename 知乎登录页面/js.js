$(document).ready(function(){
	$("#dl2").on('click',function(){
		//点击密码登录改变登录样式
		$("#text2").css("font-weight","400");
		$("#text3").css("font-weight","600");
		$(".lan").css("left","90px");
		$('#cs').css('display','none');
		$('#shouji').attr('placeholder',' 手机号或邮箱')	;
		$('#dx').attr('placeholder','密码')	;
		$('#yyyzm').text('忘记密码？');
		$('#hw').css('display','inline')
		$('#shouji').removeClass('hong');
		$('#dx').removeClass('hong');
		$('#shouji').val('');
		$('#dx').val('');
		$('#shouji').attr('type','text')
		$('#dx').attr('type','text')
		$('#shouji').attr("oninput=","if(value.length>15)value=value.slice(0,15)")
		$('#dx').attr("oninput=","if(value.length>15)value=value.slice(0,15)")
	})
	$("#dl1").on('click',function(){
		//点击免密码登录改变登录样式
		$("#text2").css("font-weight","600");
		$("#text3").css("font-weight","400");
		$(".lan").css("left","0");
		$('#cs').css('display','inline');
		$('#shouji').attr('placeholder',' 手机号')	;
		$('#dx').attr('placeholder','输入6位短信验证码');
		$('#yyyzm').text('获取语音验证码');
		$('#hw').css('display','none');
		$('#shouji').removeClass('hong');
		$('#dx').removeClass('hong');
		$('#shouji').val('');
		$('#dx').val('');	
		$('#shouji').attr('type','number')
		$('#dx').attr('type','number')
		$('#shouji').attr("oninput=","if(value.length>13)value=value.slice(0,13)")
		$('#dx').attr("oninput=","if(value.length>6)value=value.slice(0,6)")
	})
	
	$("#hw").mouseover(function(){
		$('#hw').css("color","#A9A9A9");
	})
	$("#hw").mouseout(function(){
		$('#hw').css("color","#0084FF");
	})
	$("#wxt").click(function(){
		window.open("https://wx.qq.com/?&lang=zh_CN","微信登录","width=600px,height=600");
	})
	$("#qqt").click(function(){
		window.open("https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101477621&redirect_uri=https%3A%2F%2Fsso.e.qq.com%2Fpassport%3Fsso_redirect_uri%3Dhttp%253A%252F%252Funion.qq.com%252F%26service_tag%3D14&scope=get_user_info","微信登录","width=600px,height=600");
	})
	$("#wbt").click(function(){
		window.open("https://login.sina.com.cn/signup/signin.php","微信登录","width=600px,height=600");
	})
	$("#xiazai").click(function(){
		$("#ewm").css("background-image","url(xiazaiewm.png)");
		var dis =  $("#ewm").css("display");
		$("#ewm").slideDown("3000");
		$("#erweima").attr("src","guanbi.png");
		if( dis == "block"){
			$("#ewm").slideUp("3000");
			$("#erweima").attr("src","xiazai.png");
		}
	})
	$(".erweima").click(function(){
		$("#ewm").css("background-image","url(saoma.png)");
		var dis =  $("#ewm").css("display");
		$("#ewm").slideDown("100");
		$(".erweima").attr("src","saomaan.png");
		$(".erweima").css("opacity","0");
		if( dis == "block"){
			$("#ewm").slideUp("100");
			$(".erweima").attr("src","2wm.png");
			$(".erweima").css("opacity","1");
		}
		
	})
	
	$("#shouji").focus(function(){
		var zhuangtai=$("#hw").css("display")
		if(zhuangtai == "none"){
		$("#shouji").attr("placeholder","手机号")
		$('#shouji').removeClass('hong');
		}else{
			$("#shouji").attr("placeholder","手机号或邮箱")
			$('#shouji').removeClass('hong');
		}
		
	})
	
	$("#shouji").blur(function(){
		var zhuangtai=$("#hw").css("display")
		var val=$("#shouji").val();
		if(val.length == 0){
			if(zhuangtai == "none"){
				$("#shouji").attr("placeholder","请输入手机号")
				$('#shouji').addClass('hong');
			}else{
				$("#shouji").attr("placeholder","请输入手机号或邮箱")
				$('#shouji').addClass('hong');
			}
		}
		
	})
	
	$("#dx").focus(function(){
		var zhuangtai=$("#hw").css("display")
		if(zhuangtai == "none"){
		$("#dx").attr("placeholder","输入6位短信验证码")
		$('#dx').removeClass('hong');
		}else{
			$("#dx").attr("placeholder","密码")
			$('#dx').removeClass('hong');
		}
		
	})
	
	$("#dx").blur(function(){
		var zhuangtai=$("#hw").css("display")
		var val=$("#shouji").val();
		if(val.length == 0){
			if(zhuangtai == "none"){
				$("#dx").attr("placeholder","请输入短信验证码")
				$('#dx').addClass('hong');
			}else{
				$("#dx").attr("placeholder","请输入密码")
				$('#dx').addClass('hong');
			}
		}
	})
})