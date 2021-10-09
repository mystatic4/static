$(function(){

	var swiper = new Swiper('.index-banner', {
		nextButton: '.index-banner .next',
        prevButton: '.index-banner .prev',
        pagination: '.index-banner .btns',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    });

    $('.index .index-box .index-news .tabs a').click(function(){
    	if(!$(this).hasClass('on')){
    		$(this).addClass('on').siblings().removeClass('on');
    		$('.index .index-box .index-news .list .item').eq($(this).index()).show().siblings().hide();
    	}
    })

    if($(window).scrollTop()==0){
		if($(window).width()>1024){
			$('.header-n').show();
			$('.header-b').hide();
		}else{
			$('.header-m-n').show();
			$('.header-m-b').hide();
		}
	}else{
		if($(window).width()>1024){
			$('.header-b').show();
			$('.header-n').hide();
		}else{
			$('.header-m-b').show();
			$('.header-m-n').hide();
		}
		
	}

	$(window).scroll(function(){
		if($(window).scrollTop()==0){
			if($(window).width()>1024){
				$('.header-n').show();
				$('.header-b').hide();
			}else{
				$('.header-m-n').show();
				$('.header-m-b').hide();
			}
		}else{
			if($(window).width()>1024){
				$('.header-b').show();
				$('.header-n').hide();
			}else{
				$('.header-m-b').show();
				$('.header-m-n').hide();
			}
			
		}
	})

})