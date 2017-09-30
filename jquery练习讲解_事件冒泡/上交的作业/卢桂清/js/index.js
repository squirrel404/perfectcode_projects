/******左边黑色菜单问题:*****/
//问题1:鼠标离开菜单之后没有把菜单收起来(不经过白色的内容区域就不会收,这设定是要用户一定要点一下白色菜单么....)



/******顶部轮播图:*****/
//没问题,做得很好, 鼠标移动到轮播图时也注意取消自动切换了. 点赞


/******列表轮播:*****/
//问题1: 鼠标移动到列表的时候没有取消自动切换



/******样式方面的小细节:*****/
//1,顶部轮播图右下角的小圆点和官网不一致
//2,顶部下来菜单中文字间距比官网小
//3,左边黑色菜单颜色和官网不一致
//4,"小米明星产品"几个字字号比官网小(没设字号,官网是22px)
//5,轮播列表,鼠标移动到产品上时鼠标没有变成鼠标手
//6,轮播列表产品底部的文字介绍字号与官网不一致


$(document).ready(function(){
	var timeout;
	var i=0;
	var n=0;
	/*无缝轮播*/
	var clone=$(".right_img li").first().clone();
	$(".right_img").append(clone);
	var size=$(".right_img li").size();
	for(var j=0;j<(size-1);j++){
		$(".num").append("<li></li>")
	}
	$(".num li").first().addClass("on");
	var t=setInterval(moveL,3000);
	$(".right").hover(function(){
			clearInterval(t);
	    },function(){
			t=setInterval(moveR,2000);
	})
	$(".num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".right_img").animate({left:-i*1226},0);
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".btn_l").click(function(){
		moveL();
	})
	$(".btn_r").click(function(){
		moveR();
	})


	function moveR(){
		i++;
		if(i==size){
			$(".right_img").css({left:0});
			i=1;
		}
		$(".right_img").animate({left:-i*1226},0);
		if(i==(size-1)){
			$(".num li").eq(0).addClass("on").siblings().removeClass("on");
		}
		$(".num li").eq(i).addClass("on").siblings().removeClass("on");
	}
	function moveL(){
		i--;
		if(i==-1){
			$(".right_img").css({left:-1226*(size-1)});
			i=size-2;
		}
		$(".right_img").animate({left:-i*1226},0);
		$(".num li").eq(i).addClass("on").siblings().removeClass("on");
	}

	$(".nav li").each(function(index){
		LiNode=$(this);
		LiNode.mouseover(function(){
			timeout=setTimeout(function() {
			/*$(".nav_content div").eq(index).slideDown("slow");*/
			$(".nav_content div").eq(index).addClass("content").siblings().removeClass("content");
			}, 200);
		}).mouseout(function(){
			if($(".nav_content .content").hover(function(){})){
				$(".nav_content .content").mouseout(function(){
					clearTimeout(timeout);
					/*$(".nav_content .content").slideUp("fast");*/
					$(".nav_content .content").removeClass("content");
				})
			}
			else{
				console.log("111");/*这个else没有进入*/
				clearTimeout(timeout);
				$(".nav_content .content").removeClass("content");
			}
		})
	})

	$(".left li").each(function(index){
		LiNode=$(this);
		LiNode.mouseover(function(){
			timeout=setTimeout(function() {
			/*$(".nav_content div").eq(index).slideDown("slow");*/
			$(".left_content div").eq(index).addClass("content").siblings().removeClass("content");
			}, 200);
		}).mouseout(function(){
			if($(".left_content .content").hover(function(){})){
				$(".left_content .content").mouseout(function(){
					clearTimeout(timeout);
					/*$(".nav_content .content").slideUp("fast");*/
					$(".left_content .content").removeClass("content");
				})
			}
			else{
				alert("444")
				console.log("111");/*这个else没有进入*/
				clearTimeout(timeout);
				$(".left_content .content").removeClass("content");
			}
		})
	})

	var m=setInterval(function(){
		n++;
		if(n==2){
			n=0;
		}
		$(".list").animate({left:-n*1226},300);
	},4000)
})