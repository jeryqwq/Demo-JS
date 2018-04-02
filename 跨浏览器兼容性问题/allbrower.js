
var EventUtil={
	addHandlder:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
	}else{
		element['on'+type]=handler;
	}
},
removerHanlder:function(element,type,handler){
	if(element.removeEventListener){
		element.removeEventListener(type,handler,false);
	}else if(element.datachEvent){
		element.datachEvent('on'+type,handler);
	}
	else{
		element['on'+type]=null;
	}
},
getEvent:function(event){
	return event?event:window.event;
	
},getTarget:function(event){
	return event.target||event.srcElement;
},
preventDefault:function(event){
if(event.preventDefault){
	event.preventDefault();//取消默认操作
}else{
event.returnValue=false;//IE下取消
}
},

stopPropagation:function(event){
	if (event.stopPropagation){
		event.stopPropagation();
}else{
	event.cancelBubble=true;
   }
}}