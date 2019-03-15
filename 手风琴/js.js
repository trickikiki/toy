$(function(){
	$(".pic ul li").click(function(){
		$(this).stop(true).animate({width:"800px"},500).siblings().stop(true).animate({width:"100px"},500);
	});
});