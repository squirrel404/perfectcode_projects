/*********顶部列表*********/
//做得不错,点赞

/******顶部轮播图*********/
//问题1: 鼠标移动到图上时没有停止自动轮播


/******轮播列表*********/
//问题1: 没有控制动画停止的时候再开始新的动画
//问题2: 鼠标移动到图上时没有停止自动轮播


$(document).ready(function(){
	$('.part_01 .nav').hover(function(){
          $('.fade').slideDown("fadedisplay");

          $(".part_01 .nav li").mouseover(function(){
		   var now=$(this).index();
           $('.uu').eq(now).addClass("uudisplay");
          }).mouseout(function(){
          	var now=$(this).index();
          	$('.uu').eq(now).removeClass("uudisplay");
          });

         },function(){
         	
             $(".uu").hover(function(){//划过下拉框
         	var now=$(this).index();
          	$('.uu').eq(now).addClass("uudisplay");
          },function(){
          	 $('.fade').slideUp("fadedisplay");
          });

            //  $('.fade').slideUp("fadedisplay");
         });


	var turnPrev=$('.part_02 .prev'),
		turnNext=$('.part_02 .next'),
		dots=$('.dots li'),
		imgs=$('.banner li'),
		current=0;
	turnPrev.on('click',function(){
		if(current==0)
			current=imgs.length-1;
		else
			current--;
		turnPic(current);

	});
	turnNext.on('click',function(){
		if(current==imgs.length-1)
			current=0;
		else
			current++;
		turnPic(current);
	});
	dots.on('click',function(){
		current=$(this).index();
		turnPic(current);
	});
	var timer=setInterval(function(){
		current++;
		if(current==imgs.length-1)
			current=0;
		turnPic(current);
	},3500);
	function turnPic(d){
		imgs.fadeOut();
		dots.removeClass('on');
		imgs.eq(d).fadeIn();
		dots.eq(d).addClass('on');
	};
	
	$(".part_02 .left li ").mouseover(function(){
		var now=$(this).index();
		$('.wrap').eq(now).addClass("wrapdisplay");
		$('.wrap').eq(now).mouseover(function(){
			$('.wrap').eq(now).addClass("wrapdisplay");
		 }).mouseout(function(){
		 	$('.wrap').eq(now).removeClass("wrapdisplay");
		 })

    })
    $(".part_02 .left li ").mouseout(function(){
		var now=$(this).index();
       $('.wrap').eq(now).removeClass("wrapdisplay");

	});

// -------------------------------------------------------------------
var prev_02=$('.part_03 .prev');
var next_02=$('.part_03 .next');
var list=$('.part_03 .star .list ');
var left=0;
var color_array=['#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5', '#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5'];
var lis=list.find('li');
var i=0;
for(i=0;i<lis.length;i++)
{
	lis.eq(i).css({borderColor: color_array[i]});
	
}

prev_02.on('click',function(){
	left='0px';
	turnPage();
})
next_02.on('click',function(){
	left='-1240px';
	turnPage();
})
var timer=setInterval(function(){
	if(left=='0px')
		left='-1240px';
	else
		left='0px';
	turnPage();
	
},3500);
function turnPage(){
	list.animate({left:left},1000);
}
})



