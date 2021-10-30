function ljlForm(){
    if($('.sideMenu .tit.on').size()<0){
        alert('请选择所需要投递的职位');return false;
    }
    $('input[name="sign"]').val($('meta[name="sign"]').attr('content'));
    return true;
}
$(function(){
    function getFormData(obj,data){
        data['sign']=$('meta[name="sign"]').attr('content');
        obj.find('.formVal').each(function(){
            data[$(this).attr('name')]=$(this).val();
        })
        return data;
    }
    $('.mesForm').submit(function(){
        var obj=$(this),data={action:'sub'};
        data['sign']=$('meta[name="sign"]').attr('content');
        data=getFormData(obj,data);
        if(!data.name){alert('请输入您的姓名');obj.find('input[name="name"]').focus();return false;}
        if(!data.tel){alert('请输入您的电话');obj.find('input[name="tel"]').focus();return false;}
        if(!data.cont){alert('请输入您的留言');return false;}
        subAjaxForm(obj,data,function(){},function(msg){
            if(msg && msg.error=='0'){
                if(msg.url){
                    window.location.href=msg.url;
                }else{
                    obj.removeClass('lj');
                    alert(msg.html?msg.html:'success');
                    window.location.reload();
                }
            }else{
                obj.removeClass('lj');
                alert(msg.html?msg.html:'Server response failed, please retransmit submission');
            }
        },function(){})
        
        return false;
    })
    function subAjaxForm(obj,data,bre,suc,err){
        if(obj.hasClass('lj'))return false;
        $.ajax({
            type:'post',
            data:data,
            dataType:'json',
            beforeSend:function(){
                bre();obj.addClass('lj');
            },error:function(){
                alert('Server response failure');
                obj.removeClass('lj');
                err();
            },success:function(msg){
                suc(msg);
            }
        })
    }
    
})