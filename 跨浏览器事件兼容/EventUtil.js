
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
}
};
