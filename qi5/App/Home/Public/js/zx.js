function errorTip(msg , type){
	switch(type)
	{
	   case 'success':
		 humane.success(msg);
	   break;
	
	   case 'error':
		 humane.error(msg);
	   break;
	   case 'log':
		 humane.log(msg);
	   break;
	   case 'info':
		 humane.info(msg);
	   break;
	}
}

// JavaScript Document
function urlredirect( jumpUrl) {
	var sUserAgent = navigator.userAgent.toLowerCase();	
	if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
		// ֻ�����̹Ž�վ��PC��ת�ƶ���
		var thisUrl = window.location.href;
		window.location.href = jumpUrl;
		
	}
}
