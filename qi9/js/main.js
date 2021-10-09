$(function(){
	$('.return-top').click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 800);
	})



	$('.header .header-right .share-box .share-click').click(function(){
		if($('.header .header-right .search-box .search-click').hasClass('on')){
			$('.header .header-right .search-box .search-close').removeClass('on');
			$('.header .header-right .search-box .search-click').removeClass('on');
			$('.header .header-right .search-box .search').removeClass('on');
		}
		if(!$('.header .header-right .share-box .share-click').hasClass('on')){
			$('.header .header-right .share-box .share-close').addClass('on');
			$('.header .header-right .share-box .share-click').addClass('on');
			$('.header .header-right .share-box .share').slideDown();
		}
	});

	$('.header .header-right .share-box .share-close').click(function(){
		$('.header .header-right .share-box .share-click').removeClass('on');
		$('.header .header-right .share-box .share-close').removeClass('on');
		$('.header .header-right .share-box .share').slideUp();
	});

	$('.header .header-right .share-box').hover(function(){},function(){
		$('.header .header-right .share-box .share-click').removeClass('on');
		$('.header .header-right .share-box .share-close').removeClass('on');
		$('.header .header-right .share-box .share').slideUp();
	})


	$('.header .header-right .search-box .search-click').click(function(){
		if($('.header .header-right .share-box .share-click').hasClass('on')){
			$('.header .header-right .share-box .share-click').removeClass('on');
			$('.header .header-right .share-box .share-close').removeClass('on');
			$('.header .header-right .share-box .share').slideUp();
		}
		if(!$('.header .header-right .search-box .search-click').hasClass('on')){
			$('.header .header-right .search-box .search-click').addClass('on');
			$('.header .header-right .search-box .search-close').addClass('on');
			$('.header .header-right .search-box .search').addClass('on');
		}
	});

	$('.header .header-right .search-box .search-close').click(function(){
		$('.header .header-right .search-box .search-close').removeClass('on');
		$('.header .header-right .search-box .search-click').removeClass('on');
		$('.header .header-right .search-box .search').removeClass('on');
	})

	$('.header .header-right .search-box').hover(function(){},function(){
		$('.header .header-right .search-box .search-close').removeClass('on');
		$('.header .header-right .search-box .search-click').removeClass('on');
		$('.header .header-right .search-box .search').removeClass('on');
	})

	$('.nav-click').click(function(){
		if(!$(this).hasClass('on')){
			$('.nav-click').addClass('on');
			$('.sidebar').slideDown();
			var h=$(window).height();
			$('.container').css('height',h);
		}else{
			$('.nav-click').removeClass('on');
			$('.sidebar').slideUp();
			$('.container').css('height','auto');
		}
	});

	$('.sidebar .sidebar-new .nav ul li .tits').click(function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$('.sidebar .sidebar-new .nav ul li dl').slideUp();
			$(this).next('dl').slideDown();
		}else{
			$(this).removeClass('on');
			$(this).next('dl').slideUp();
		}
	})


	$('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
		var _this = $(this);
		if ($(window).scrollTop() > _this.offset().top - $(window).height()*0.9) {
			_this.addClass('animate');
		}
	});

	$(window).scroll(function(){
	 	$('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
			var _this = $(this);
			if ($(window).scrollTop() > _this.offset().top - $(window).height()*0.9) {
				_this.addClass('animate');
			}
		});
	})
})
//第三方扩展皮肤
function alert_tips(_msg) {
	layer.alert(_msg, {
		icon: 2,
		skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
	})
}
function alert_true(_msg) {
	layer.alert(_msg, {
		icon: 1,
		skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
	})
}
function alert_url(_msg, _url) {
	layer.open({
		icon: 1,
		content: _msg,
		btn: ['确认'],
		closeBtn: 0,
		yes: function (index, layero) {
			window.location.href = _url;
		},
		btn2: function (index, layero) {

		},
		cancel: function () {
			//右上角关闭回调
		}
	});
}
function fcHeaderSearch(_Ac) {
	var keys = $("#txtHeaderKeys"+_Ac).val();
	if (keys == "") {
		alert_tips("请输入关键词");
		return false;
	}
	location.href = "/search.htm?keys=" + keys;
}