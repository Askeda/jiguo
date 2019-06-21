$(document).ready(function(){
	
	$(".ddd").click(function(){
	$(".non").show();
	$(".qqq").show();
	$(this).hide();
	});
	$(".qqq").click(function(){
		$(".non").hide();
		$(".ddd").show();
		$(this).hide();
	});
	
	
	
	$(".ddd1").click(function(){
	$(".non1").show();
	$(".qqq2").show();
	$(this).hide();
	});
	$(".qqq2").click(function(){
		$(".non1").hide();
		$(".ddd1").show();
		$(this).hide();
	});
	
	$(".xin").css("color","#ff4543");
	$(".xia1").show();
	$(".xin").click(function(){
		$(".xia1").show();
		$(".xia2").hide();
		$(".xinxinxin").show();
		$(".rerere").hide();
		$(".re").css("color","black");
		$(".xin").css("color","#ff4543");
	});
	$(".re").click(function(){
		$(".xia2").show();
		$(".xia1").hide();
		$(".xinxinxin").hide();
		$(".rerere").show();
		$(".xin").css("color","black");
		$(".re").css("color","#ff4543");
	});
	
})
