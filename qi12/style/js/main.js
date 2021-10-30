function tab(ul,li){
	$(li).mouseover(function(){
	$(ul).hide().eq($(this).index()).show();
	$(li).removeClass("hover").eq($(this).index()).addClass("hover");
	return false;
	});
}
function show(li,p){
	$(li).hover(function(){
		$(this).find(p).fadeIn(300);
	},function(){
		$(this).find(p).fadeOut(300);
	});
}

jQuery.navlevel2 = function(level1,dl,dytime) {
  $(level1).mouseenter(function(){
	  varthis = $(this);
	  delytime=setTimeout(function(){
		varthis.find(dl).fadeIn();
	},dytime);
	
  });
  $(level1).mouseleave(function(){
	 clearTimeout(delytime);
	 $(this).find(dl).hide();
  });
};

$(document).ready(function(){
	 $(".ra.hover").hover(function(){
    	$(this).stop().animate({"left":"-110px"});
    },function(){
    	$(this).stop().animate({"left":"0"});
    });
     $(".wx").hover(function(){
    	$(this).find(".wx_img").stop().animate({"left":"-81px"});
    },function(){
    	$(this).find(".wx_img").stop().animate({"left":"56px"});
    });
});


var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

function goTopEx(id) {
    var obj = document.getElementById(id);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    function getScrollTop() {
        var xsun = document.documentElement.scrollTop;
        if (Sys.chrome) {
            xsun=document.body.scrollTop;
        }
        return xsun;
    }
    function setScrollTop(value) {
        if (Sys.chrome) {
            document.body.scrollTop = value;
        }
        else {
            document.documentElement.scrollTop = value;
        }
    }
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}

function touchzy(main_visual,main_image,main_li,btn_prev,btn_next){
		var len=$(main_li).length;
		var btn="<div class='flicking_con'>"
		for (var i=0;i<len;i++) {
			btn+="<a href='javascript:;'></a>"
		}
		btn+="</div>"
		$(main_visual).append(btn);
		$dragBln = false;
		
		$(main_image).touchSlider({
			flexible : true,
			speed : 200,
			btn_prev : $(btn_prev),
			btn_next : $(btn_next),
			paging : $(".flicking_con a"),
			counter : function (e){
				$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		
		$(main_image).bind("mousedown", function() {
			$dragBln = false;
		});
		
		$(main_image).bind("dragstart", function() {
			$dragBln = true;
		});
		
		timer = setInterval(function(){
			$(btn_next).click();
		}, 5000);
		
		$(main_visual).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				$(btn_next).click();
			},5000);
		});
		
		$(main_image).bind("touchstart",function(){
			clearInterval(timer);
		}).bind("touchend", function(){
			timer = setInterval(function(){
				$(btn_next).click();
			}, 5000);
		});
}



$(document).ready(function(){
	 $(".ra.hover").hover(function(){
    	$(this).stop().animate({"left":"-110px"});
    },function(){
    	$(this).stop().animate({"left":"0"});
    });
     $(".wx").hover(function(){
    	$(this).find(".wx_img").stop().animate({"left":"-81px"});
    },function(){
    	$(this).find(".wx_img").stop().animate({"left":"56px"});
    });
});



function add_message(){
	var bid=$("input[name='bid']").val();
	var name=$("input[name='name']").val();
	var phone=$("input[name='phone']").val();
	var content=$("textarea[name='content']").val();
	if(bid==''){
		alert('栏目不存在'); return false;
	}
	if(name==''){
		alert('姓名不能为空'); return false;
	}
	if(phone==''){
		alert('电话不能为空'); return false;
	}
	if(content==''){
		alert('内容不能为空'); return false;
	}
	
	var url="add_message.php";
	var da={};
	da['bid']=bid;
	da['name']=name;
	da['phone']=phone;
	da['content']=content;

	$.ajax({    
	type: "POST",    
	url: url,    
	data: da,     
	beforeSend: function(XMLHttpRequest){       
	},    
	success: function(data, textStatus){   
		var dt=parseFloat(data);
		if(dt==1){
		    alert("提交成功！");	
			location.reload();
		}else if(dt==2){
		   alert("验证码错误");
		   return false;	
		}
	
	},    
	complete: function(XMLHttpRequest, textStatus){    
	},    
	error: function(){  
	alert("更新失败");     
	},    
	cache : false   
	}); 
	
	
}




