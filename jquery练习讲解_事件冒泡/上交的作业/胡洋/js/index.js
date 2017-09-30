/*********顶部下拉菜单**********/
//做得不错,实现了下拉展示效果(可以把展示速度调快一点)


/*********顶部轮播图**********/
//总体不错,有实现淡入展示效果
//问题1: 鼠标移动到图片时没有禁止自动切换


/*********列表轮播**********/
//问题1: 左右按钮点不动
//问题2: 鼠标移动到列表上时没有停止轮播(T_T虽然小米官网本身也没做这个细节)




$(document).ready(function(){
	var timeoutid;
	$("#shopping").mouseover(function(){
		$("#shop-info").show();
	}).mouseout(function(){
		$("#shop-info").hide();
	});
	// $(".part_01 .nav").mouseover(function(){
	// 	var index = $(this).index();
	// 	$('.children_list').eq(index).show();
	// 	timeoutid=setTimeout(function(){
	// 		$(".part_01 .nav_info").slideDown();
	// 	},300);	
	// }).mouseout(function(){
	// 	$(".part_01 .nav_info").slideUp();
	// 	clearTimeout(timeoutid);
	// });
	// 顶部导航栏下方块区域显示，第一个div为弹出方式，弹出一个框时再点击其他标签将不再有弹入弹出效果
	var index;
	$(".nav_list").hover(function(){
		$(this).css('color','#ff6700');
		$('#'+$(this).attr('control')).show();
		$("#menu_content_bg").height(230);
	},function(){
		$("#menu_content_bg").height(0);
		$('#' + $(this).attr('control')).hide();
		$(this).css('color','#424242');
	});
	$("#menu_content_bg").hover(function(){
		$('#' + $('.nav_list').attr('control')).show();
		$(this).height(230);
	},function(){
		$("#menu_content_bg").height(0);
		$('#' + $(".nav_list").attr('control')).hide();
		$(this).css('color','#424242');
	});


	/*banner_menu_content块的显示，当鼠标掠过li标签时，banner_menu_content显示，鼠标悬浮在该块区域时，
	区域块不会消失*/
	$(".left").children().hover(function(){
    	$(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
	},function(){
    	$(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
	});

	//banner图渐显轮播效果
	//先获取所需DOM
	var turnPrev = $(".part_02 .controller .prev"),      //向前翻按钮
		turnNext = $(".part_02 .controller .next"),		//向后翻按钮
		dots = $(".dots li"),							//右下方的小点点，点击可有切换图片的效果
		imgs = $(".right .banner li"),					//先获取所有banner区域的图片
		current = 0;									//当前显示图片的标号

	//点击左边按钮，向前翻一张图片
	turnPrev.on('click',function(){
		if(current == 0){
			current = imgs.length - 1;    //如果当前显示的是第一张图片，向前翻一张到banner区域的最后一张图片
		}
		else{
			current--;                    //当前显示图片的编号减1，将自动切换到上一张图片
		}

		turnPic(current);  			//图片跳转函数，将自动跳转到该编号的图片
	});

	//点击右边按钮，向后翻一张图片
	turnNext.on('click',function(){
		if(current == imgs.length - 1){
			current = 0;				//如果当前显示的是最后一张图片，向后翻一张到banner区域的第一张图片
		}
		else{
			current++;					//当前显示图片的编号加1，将自动切换到下一张图片
		}

		turnPic(current);
	});

	//点击对应小点点也能切换到对应banner区域的图片
	dots.on('click',function(){
		current = $(this).index();         //由于图片数目和小点点数目相同，故可直接获取小点点在数组当中的编号，即可显示对应图片
		turnPic(current);
	});

	//每隔一段时间自动切换图片
	var timer = setInterval(function(){
		current++;      //编号加1，自动切换到下一张图片
		if(current == imgs.length){
			current = 0;               //如果当前显示的为banner区域的最后一张图片，那么将自动切换到第一张图片
		}
		turnPic(current);
	},3000);


	//根据图片编号index跳转函数代码
	function turnPic(id){
		imgs.fadeOut();   	//先让所有banner区域的图片渐隐，隐藏起来
		dots.removeClass('on');   //将所有小点点的on样式去掉
		imgs.eq(id).fadeIn(); 	//让对应编号的图片渐显出来
		dots.eq(id).addClass('on');  //给对应图片的小点点赋予on样式
	}

	//小米明星单品代码
	var prev_02 = $(".part_03 .controller .prev"),
		next_02 = $(".part_03 .controller .next"),
		list = $(".part_03 .star ul"),
		left = 0;

	var colorArray = ['#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5', '#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5'],
		lis = list.find('li');
	//利用for循环给每个单品上面的border-top赋予不同的颜色值，让它看起来更好看些
	for(var i = 0;i<lis.length;i++){
		lis.eq(i).css({
			borderColor:colorArray[i]
		});
	}

	//下面是轮播部分代码，点击按钮会向左或向右发生偏移，每隔段时间自动偏移

	prev_02.on('click',function(){
		left = '0px';
		turnPage();
	});

	next_02.on('click',function(){
		left = '-1240px';
		turnPage();
	});

	var timer = setInterval(function(){
		if(left == '0px'){
			left = '-1240px';			
		}
		else{
			left = '0px';
		}
		turnPage();
	},5000);

	function turnPage(){
		list.animate({
			left:left
		},2000);
	}

	//当鼠标掠过时，图片向上偏移,并有阴影显示，鼠标移过后恢复正常
	$(".zhinengyinjian_content li").hover(function(){
		$(this).css({
			'top':'-6px',
			'box-shadow' : "0  15px 30px rgba(0,0,0,.6)"
		});
	},function(){
		$(this).css({
			'top' : '0px',
			'box-shadow' : "none"
		});
	});
});



