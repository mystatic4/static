

$(function(){
	
	
if($('.IndexBanner').size()>0)
{
var IndexBanner = new Swiper('.IndexBanner', {
		autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
		},
		 pagination: {
			el: '.swiper-pagination',
			clickable: true,
        },
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
        },
        effect: 'fade'
	})
}	
jQuery('.backtopa').on('click', function(e) {
		$('body,html').animate({'scrollTop':0},300);
		
});

 jQuery(".controlBar").click(function () {
        if ($(this).attr("class").indexOf("open") > 0) {
            $(this).removeClass("open").addClass("close");
            //$("#bottom").css("bottom", "-45px");
        } else {
            $(this).removeClass("close").addClass("open");
            //$("#bottom").css("bottom", "0");
        };
       $(".bottom ul").slideToggle("fast");
    });


	
jQuery('.navbg').on('click', function() {
		jQuery('.meau').removeClass('meauon');
		jQuery('body').removeClass('bodyon');
		jQuery('.nav').removeClass('navon');
		jQuery('.navbg').removeClass('navbgon');
		jQuery('.navbg').fadeOut(300);
	});
	
	
	jQuery('.meau').on('click', function(e) {
		e.stopPropagation();
		if(jQuery(this).hasClass('meauon')) {
			jQuery(this).removeClass('meauon');
			jQuery('body').removeClass('bodyon');
			jQuery('.nav').removeClass('navon');
			jQuery('.navbg').removeClass('navbgon');
			jQuery('.navbg').fadeOut(300);
			
		} else {
			jQuery(this).addClass('meauon');
			jQuery('body').addClass('bodyon');
			jQuery('.nav').addClass('navon');
			jQuery('.navbg').fadeIn(300);
			jQuery('.navbg').addClass('navbgon');
		}
	})
	jQuery('.nav').on('click', function(e) {
		e.stopPropagation();
	});
	
	new WOW().init();

	
})

