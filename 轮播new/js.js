var i=0;
var timer;
$(function(){
	ShowTime();
	$(".tab").hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);//停掉
	},function(){
		ShowTime();
		});
	$(".btn1").click(function(){
		clearInterval(timer);
		if (i===0) 
		{
			i=3;
		}
		i--;
		Show();
		ShowTime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if (i===2) 
		{
			i=-1;
		}
		i++;
		Show();
		ShowTime();
	})
});
function Show()
{
	$(".ig").eq(i).stop(true).animate({width:"800px"},500).siblings().stop(true).animate({width:"0px"},500);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function ShowTime()//时钟周期
{
	timer=setInterval(function(){
		i++;
		if (i===4)
		{
			i=0;
		}
		Show();
	},3000);
}