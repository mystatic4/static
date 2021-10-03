$(document).ready(function(){
	jQuery(".nav").slide({ type:"menu",titCell:".m",targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
		/*二级*/jQuery(".sub").slide({ type:"menu",titCell:".m2",targetCell:".sub2",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
		/*三级*/jQuery(".sub2").slide({ type:"menu",titCell:".m3",targetCell:".sub3",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
		/*追加分级箭头*/$(".m2:has(ul)").add(".m3:has(ul)").find("a:first").append(" &raquo; ");
	/*导航*/
	
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,delayTime:700});
	/*首页幻灯片*/

	
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:1});
	/*首页产品*/

	
	
	jQuery(".pro_left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:4});
	/*产品分类列表*/
	
	jQuery(".sideMen").slide({titCell:"h3 i",targetCell:".sideMen_cont",trigger:"click"});
	/*常见问题*/
	
	jQuery(".products_select").slide({type:"menu",titCell:".products_cot_2",targetCell:".hide",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品筛选*/
	
	jQuery(".products_list").slide({type:"menu",titCell:".pic",targetCell:".pic_b",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品大图*/
	
	jQuery(".classify").slide({titCell:"ul li span",targetCell:".child",defaultPlay:false,effect:"slideDown",trigger:"click"});
	/*侧导航*/
	
	jQuery(".pic_list").slide({mainCell:".pic_list_content ul",autoPage:true,effect:"leftLoop",scroll:1,vis:4});
	/*产品详细小图切换*/
	
	jQuery(".products_detail_right").add(".detail").add(".about").add(".honor").slide();
	/*产品信息*//*产品详细*//*发展历程*//*资质荣誉*/
	
	
	//品牌翻转
	var turn = function(target,time,opts){
		target.find('a').hover(function(){
			$(this).find('img').stop().animate(opts[0],time,function(){
				$(this).hide().next().show();
				$(this).next().animate(opts[1],time);
			});
		},function(){
			$(this).find('.info').animate(opts[0],time,function(){
				$(this).hide().prev().show();
				$(this).prev().animate(opts[1],time);
			});
		});
	}
	var verticalOpts = [{'width':0},{'width':'180px'}];
	turn($('#vertical'),100,verticalOpts);
	var horizontalOpts = [{'height':0,'top':'120px'},{'height':'240px','top':0}];
	turn($('#horizontal'),100,horizontalOpts);

	
});