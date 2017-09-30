/*********顶部下拉菜单*********/
//问题1: 没有做鼠标离开菜单时收起菜单效果


/*********顶部轮播图*********/
//问题1: 切换轮播图时左边的黑色菜单也变了
//问题2: 第一张点上一张没去第5张
//问题3: 鼠标移动到轮播图时没有停止轮播
//问题4: 右箭头不能点
//问题5: 切换图片时似乎有两张图????(另一张展示在小米单品那里)


/*********轮播列表*********/
//问题1:没有控制鼠标移动到图片上时停止轮播





/*Array.prototype.index = function(e){
	for(var i=0;i<this.length;i++){
		if(this[i]==el){
			return i;
		}
	}
	return -1;
}

var tab = document.getElementById('tab'),
    item = tab.getElementsByTagName('li'),
    content = document.getElementById('content'),
    product = content.getElementsByTagName('div');
    
    item=Array.prototype.slice.call(item);

    tab.onclick=function(e){
    	var e = e || window.event,
    	target = e.target,
    	tagName = target.tagName.toLowerCase();

    if(tagName=='li'){
    	var index=target.getAttribute('data-index');
    	for( var i=0;i<item.length;i++){
    		item[i].className='';
    		product[i].style.display='none';
    	 
     }	

     item[index].className='on';
     product[index].style.display='block';

     
   }
}
 document.getElementById('seeDom').onclick = function(){
        document.getElementById('mask').style.display = 'block';
        document.getElementById('see').style.display = 'block';
    }
    document.getElementById('mask').onclick = function(){
        document.getElementById('see').style.display = 'none';
        this.style.display = 'none';
    }*/
$(function(){		
	//设计案例切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
	//设计案例hover效果
	$('.product-wrap .product li').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	});


$(document).ready(function(){

	
	var turnPrev = $('.part-two .prev'),	
		turnNext = $('.part-two.next'),	
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
	}, 3000);


	function turnPic(id){
		imgs.fadeOut();	
		dots.removeClass('on');	
		imgs.eq(id).fadeIn();	
		dots.eq(id).addClass('on');	
	}

     
	var prev_02 = $('.part-three .prev'),
		next_02 = $('.part-three .next'),
		list = $('.part-three .list'),
		left = 0;

	
	var colorArray = ['#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5', '#ffac13', '#83c44e', '#2196f3', '#e53935', '#00c0a5'],
		lis = list.find('li'),
		i = 0;
	for(i=0; i<lis.length; i++){
		lis.eq(i).css({borderColor: colorArray[i]});
	}
	
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