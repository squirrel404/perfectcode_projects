$(document).ready(function(){
	// $(document).ready(), 是为了保证这个js麻烦，无论是放在前面引入，还是放在底部引入，都可以正常运行。
	// 如果这个js文件是在head部分引入，那可能页面的DOM还没渲染出来，导致后面获取DOM获取不到。
	// 所以，为了保证里面的代码能正常运行，养成这个习惯



	//导航条下滑菜单
	
	var slide1 = $(".slide1"),
		li1 = $(".nav .li1");
		li1.mouseover(function(){
			slide1.slideDown("fast");
		});
		li1.mouseout(function(){
			slide1.slideUp("fast");
		})
	var slide2 = $(".slide2"),
		li2 = $(".nav .li2");
		li2.mouseover(function(){
			slide2.slideDown("fast");
		});
		li2.mouseout(function(){
			slide2.slideUp("fast");
		})
	var slide3 = $(".slide3"),
		li3 = $(".nav .li3");
		li3.mouseover(function(){
			slide3.slideDown("fast");
		});
		li3.mouseout(function(){
			slide3.slideUp("fast");
		})
	var slide4 = $(".slide4"),
		li4 = $(".nav .li4");
		li4.mouseover(function(){
			slide4.slideDown("fast");
		});
		li4.mouseout(function(){
		slide4.slideUp("fast");
	})
	var slide5 = $(".slide5"),
		li5 = $(".nav .li5");
		li5.mouseover(function(){
			slide5.slideDown("fast");
		});
		li5.mouseout(function(){
			slide5.slideUp("fast");
		})
	var slide6 = $(".slide6"),
		li6 = $(".nav .li6");
		li6.mouseover(function(){
			slide6.slideDown("fast");
		});
		li6.mouseout(function(){
			slide6.slideUp("fast");
		})
	var slide7 = $(".slide7"),
		li7 = $(".nav .li7");
		li7.mouseover(function(){
			slide7.slideDown("fast");
		});
		li7.mouseout(function(){
			slide7.slideUp("fast");
		})
	

	/*banner图渐显轮播效果*/

	// 先获取需要的DOM
	var turnPrev = $('.part_02 .prev'),	// 向前翻按钮
		turnNext = $('.part_02 .next'),	// 向后翻按钮
		dots = $('.dots li'),	// 右下角那些小点点，点击可直接翻看某张图片的
		imgs = $('.banner li'),	// 所有的图片
		current = 0;			// 正在显示的图片的编号

	// 左边一个按钮，点击向前翻一张图片
	turnPrev.on('click', function(){
		// 检测一下当前显示的图片是不是第一张了，是的话，再往前翻，就应该显示最后一张图片了
		if(current == 0){
			current = imgs.length - 1;
		}else{	// 不是的话，就-1，显示上一张图片
			current--;
		}

		// 上面算出了要翻到哪张图片去，下面调用翻图片的，把要显示的哪张图片ID传给这个turnPage函数，由它来显示那张图片
		turnPic(current);
	});

	// 右边一个按钮，点击向后翻一张图片
	turnNext.on('click', function(){
		// 检测一下当前显示的图片是不是已经是最后一张图片了，是的话，再往后翻，就应该显示第一张图片了
		if(current == imgs.length - 1){
			current = 0;
		}else{	// 不是的话，就+1，显示下一张图片
			current++;
		}

		// 上面算出了要翻到哪张图片去，下面调用翻图片的，把要显示的哪张图片ID传给这个turnPage函数，由它来显示那张图片
		turnPic(current);
	});

	// 点那些小点点，直接翻到某张图片
	dots.on('click', function(){
		current = $(this).index();	// 小点点的数量与图片的数量是相同的，所以这里直接获取到小点点是数组里的第几个，也就是翻到第几张图片
		turnPic(current);
	});

	// 不点击也要自动翻，隔3秒翻一下吧
	var timer = setInterval(function(){
		current++;
		// 检测一下当前显示的图片是不是第一张了，是的话，再往前翻，就应该显示最后一张图片了
		if(current ==  imgs.length){
			current = 0;
		}
		turnPic(current);
	}, 3000);


	/*显示图片的函数，根据id，来确实显示哪张图片*/
	function turnPic(id){
		imgs.fadeOut();	// 先把所有的图片fadeOut，渐隐起来
		dots.removeClass('on');	// 先把所有那些小点点的on样式去掉
		imgs.eq(id).fadeIn();	// 再把目标图片fadeIn渐显出来，因为这里时间很快，所以是可以这样的
		dots.eq(id).addClass('on');	// 给第几个小点点加on class，让它看起来不一样
	}


	/*--------------------------------------------------分隔线---------------------------------------------------------*/
	var prev_02 = $('.part_03 .prev'),
		next_02 = $('.part_03 .next'),
		list = $('.part_03 .list'),
		left = 0;

	// 先给每个单品上面那个border一个不同的颜色，看起来好看些，这里的思想就是先保存好10个颜色值，然后依次给每一个
	var colorArray = ['#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5', '#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5'],
		lis = list.find('li'),
		i = 0;
	for(i=0; i<lis.length; i++){
		lis.eq(i).css({borderColor: colorArray[i]});
	}
	// jquery有提供一个自己的数组循环，同学们可以把上面的for注释，把下面这一块注释打开看一下
	/*$.each(lis, function(k, v){
		console.log(k);
		$(v).css({borderColor: colorArray[k]})
	});*/

	// 下面是轮播部分的代码
	prev_02.on('click', function(){
		left = '0px';
		turnPage();
	});

	next_02.on('click', function(){
		left = '-1240px';
		turnPage();
	});

	var timer = setInterval(function(){
		if(left == '0px'){
			left = '-1240px';
		}else{
			left = '0px';
		}
		turnPage();
	}, 3000);

	function turnPage(){
		list.animate({left: left}, 1000);	
	}

});