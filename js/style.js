$(document).ready(function(){
	$(".dian").click(function(){
	$(".nn").show();
	$(".dian").hide();
	$(".dian2").show();
});
	$(".dian2").click(function(){
		$(".nn").hide();
		$(".dian").show();
		$(this).hide();
	});
})