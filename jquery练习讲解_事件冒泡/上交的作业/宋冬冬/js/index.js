/********顶部下拉菜单*******/
//使用了淡入展示菜单(官网是下拉菜单)
//问题1: 永远点不到下拉菜单(鼠标移上去菜单就消失了...)
//问题2: 菜单切换一次内容之后鼠标再移动到别的标签时内容不会再改变



/********轮播列表*******/
//问题1:样式排列方式不对,不能轮播



$(document).ready(function(){
  $("#li1").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child").fadeIn();
  });
  $("#li1").mouseleave(function(){
    $("#first-child").fadeOut();
  });
  $("#li2").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child1").fadeIn();
  });
  $("#li2").mouseleave(function(){
    $("#first-child1").fadeOut();
  });
  $("#li3").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child2").fadeIn();
  });
  $("#li3").mouseleave(function(){
    $("#first-child2").fadeOut();
  });
  $("#li4").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child3").fadeIn();
  });
  $("#li4").mouseleave(function(){
    $("#first-child3").fadeOut();
  });
  $("#li5").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child4").fadeIn();
  });
  $("#li5").mouseleave(function(){
    $("#first-child4").fadeOut();
  });
  $("#li6").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child5").fadeIn();
  });
  $("#li6").mouseleave(function(){
    $("#first-child5").fadeOut();
  });
  $("#li7").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child6").fadeIn();
  });
  $("#li7").mouseleave(function(){
    $("#first-child6").fadeOut();
  });
  $("#li8").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child7").fadeIn();
  });
  $("#li8").mouseleave(function(){
    $("#first-child7").fadeOut();
  });
  $("#li9").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child8").fadeIn();
  });
  $("#li9").mouseleave(function(){
    $("#first-child8").fadeOut();
  });
  $("#li10").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $("#first-child9").fadeIn();
  });
  $("#li10").mouseleave(function(){
    $("#first-child9").fadeOut();
  });
});
$(document).ready(function(){
$(".gouwu").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $(".che").fadeIn();
  });
  $(".gouwu").mouseleave(function(){
    $(".che").fadeOut();
  });
});
$(document).ready(function(){
	$(".a-down").mouseenter(function(){
    // $("#first-child").css("display","inline");
    $(".nav-down").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down").fadeOut();
  });
  $(".b-down").mouseenter(function(){
    $(".nav-down1").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down1").fadeOut();
  });
  $(".c-down").mouseenter(function(){
    $(".nav-down").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down").fadeOut();
  });
  $(".d-down").mouseenter(function(){
    $(".nav-down1").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down1").fadeOut();
  });
  $(".e-down").mouseenter(function(){
    $(".nav-down1").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down1").fadeOut();
  });
  $(".f-down").mouseenter(function(){
    $(".nav-down").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down").fadeOut();
  });
  $(".g-down").mouseenter(function(){
    $(".nav-down1").fadeIn();
  });
  $(".menu-nav").mouseleave(function(){
    $(".nav-down1").fadeOut();
  });
});
$(document).ready(function(){
   var turnPrev = $('.prev'),	
		turnNext = $('.next'),	
		dots = $('.dots li'),	
		imgs = $('.banner li'),	
		current = 0;			
	turnPrev.on('click', function(){
		if(current == 0){
			current = imgs.length - 1;
		}else{	
			current--;
		}
		turnPic(current);
	});
	turnNext.on('click', function(){
		if(current == imgs.length - 1){
			current = 0;
		}else{
			current++;
		}
		turnPic(current);
	});
	dots.on('click', function(){
		current = $(this).index();
		turnPic(current);
	});
	var timer = setInterval(function(){
		current++;
		if(current ==  imgs.length){
			current = 0;
		}
		turnPic(current);
	}, 2000);
	function turnPic(id){
		imgs.fadeOut();	
		dots.removeClass('on');	
		imgs.eq(id).fadeIn();	
		dots.eq(id).addClass('on');	
	}
});
