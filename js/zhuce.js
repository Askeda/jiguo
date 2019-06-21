$(document).ready(function(){
		//用户名获得焦点验证
		$("#user").focus(function(){
			$("#user_prompt").show();
			$("#user_prompt1").hide();
			$("#user_prompt2").hide();
		}).blur(function(){//失去焦点验证
			var name=$("#user").val();
			var nre=/^[a-zA-Z][a-zA-Z0-9]{3,16}$/g;
			if(name==0){
				$("#user_prompt").hide();
				$("#user_prompt1").show();
				return false;
			}
			else if(nre.test(name)){
				$("#user_prompt").hide();
				$("#user_prompt1").hide();
				$("#user_prompt2").show();
			}else{
				$("#user_prompt").show();
				$("#user_prompt1").hide();
				$("#user_prompt2").hide();
			}
		});
		//密码
		$("#pwd").focus(function(){
			$("#pwd_prompt").show();
			$("#pwd_prompt1").hide();
			$("#pwd_prompt2").hide();
		}).blur(function(){
			var pwdd=$("#pwd").val();
			var pre=/^[a-zA-Z0-9]{4,11}$/g;
			if(pwdd==""){
				$("#pwd_prompt").hide();
				$("#pwd_prompt1").show();
			}else if(pre.test(pwdd)){
				$("#pwd_prompt").hide();
				$("#pwd_prompt1").hide();
				$("#pwd_prompt2").show();
			}else{
				$("#pwd_prompt").show();
				$("#pwd_prompt1").hide();
				$("#pwd_prompt2").hide();
			}
		});
		//确认密码
		$("#repwd").focus(function(){
			$("#repwd_prompt").show();
		}).blur(function(){
			var pwdd=$("#pwd").val();
			var repwdd=$("#repwd").val();
//			var pree=/^[a-zA-Z0-9]{4,11}$/g;
			if(repwdd==""||repwdd!=pwdd){
				$("#repwd_prompt").hide();
				$("#repwd_prompt1").show();
			}else{
				$("#repwd_prompt").hide();
				$("#repwd_prompt1").hide();
				$("#repwd_prompt2").show();
			}
		});
//		//邮箱
//		$("#email").focus(function(){
//				$("#email_prompt").show();
//				$("#email_prompt1").hide();
//				$("#email_prompt2").hide();
//				$("#email_prompt3").hide();
//		}).blur(function(){
//			var em=$("#email").val();
//			var rem=/^\w+@+[a-zA-Z0-9]+\.+[a-zA-Z]+$/g;
//			if(em==""){
//				$("#email_prompt").hide();
//				$("#email_prompt3").show();
//			}else if(rem.test(em)){
//				$("#email_prompt").hide();
//				$("#email_prompt1").hide();
//				$("#email_prompt2").show();
//				$("#email_prompt3").hide();
//			}else{
//				$("#email_prompt").hide();
//				$("#email_prompt1").show();
//				$("#email_prompt2").hide();
//				$("#email_prompt3").hide();
//			}
//		});
		//手机号
		$("#mobile").focus(function(){
			$("#mobile_prompt1").show();
			$("#mobile_prompt2").hide();
			$("#mobile_prompt3").hide();
		}).blur(function(){
			var mo=$("#mobile").val();
			var remo=/^[1][0-9]{10}$/g;
			if(mo==""){
			$("#mobile_prompt1").show();
			$("#mobile_prompt2").hide();
			$("#mobile_prompt3").hide();
			}else if(remo.test(mo)){
			$("#mobile_prompt1").hide();
			$("#mobile_prompt2").hide();
			$("#mobile_prompt3").show();
			}else{
			$("#mobile_prompt1").hide();
			$("#mobile_prompt2").show();
			$("#mobile_prompt3").hide();
			}
		});
		
		$("#picture").focus(function(){
			$("#picture1").show();
			$("#picture2").hide();
		}).blur(function(){
			var pi=$("#picture").val();
			var rpi=/^[a-z0-9]{4}$/i;
			if(pi==""){
				$("#picture1").show();
			$("#picture2").hide();
			}
			else if(rpi.test(pi)){
				$("#picture1").hide();
			$("#picture2").show();
			}else{
				$("#picture1").show();
			$("#picture2").hide();
			}
		});
		
		
		
		$("#ym").focus(function(){
			$("#ym1").hide();
			$("#ym2").hide();
			$("#ym3").hide();
			$("#ym4").show();
		}).blur(function(){
			var yy=$("#ym").val();
			var ryy=/^[0-9]{4}$/g;
			if(yy==""){
			$("#ym1").show();
			$("#ym2").hide();
			$("#ym3").hide();
			$("#ym4").hide();	
			}else if(ryy.test(yy)){
			$("#ym1").hide();
			$("#ym2").hide();
			$("#ym3").show();
			$("#ym4").hide();
			}else{
			$("#ym1").hide();
			$("#ym2").show();
			$("#ym3").hide();
			$("#ym4").hide();	
			}
		});
})
