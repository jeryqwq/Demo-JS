	(function(){//闭包防止内部变量冲突
		var _$=window.$;//全局变量冲突解决，先放入_变量中，添加方法释放变量
		var _jQuery=window.jQuery;
				var jQuery=window.$=window.jQuery=function(selecter){//暴露外层两个接口
					return new jQuery.fn.init(selecter)//条用init方法初始化，return this会死循环
				}
				//原型对象
				jQuery.fn=jQuery.prototype={
					init:function(selecter){
    var elements  = document.querySelectorAll(selecter);//ES5特性css选择器返回所有元素，仅有一个元素请用$('XXX')[0]取得
       Array.prototype.push.apply(this,elements)//底层处理都是加下标和赋值
						return this//指向jQuery
					},
					ajax:function(){
						console.log('ajax')
					},
				};
				jQuery.fn.init.prototype=jQuery.fn;//修正原型实例化时对象无限叠加
				
				jQuery.extend=jQuery.fn.extend=function(){//jq继承，可传多个对象，没写深拷贝，要防止argument之间的互相引用死循环问题
					for (item in arguments){
						for( i in arguments[item]){
							this[i]=arguments[item][i]
						}
					}
				};
				jQuery.extend({
					noConflict:function(){//释放变量
						window.$=_$; 
						window.jQuery=_jQuery;
						return $;
					},
					arrayToObj:function(array){//数组转换对象
						if(array.constructor===Array){ 
							var o={};
						 Array.prototype.push.apply(o,array)
						return o;
						}else{
							throw new TypeError("the receive argument is a Array")
						}
					},	
				})
				jQuery.fn.extend({
					get:function(num){//传下标得到第Num个元素
						if(num.constructor===Number){
							return this[num]
						}else{
						throw new TypeError("the receive argument is a Number")
						}
					},
						each:function(fn){//jQ的each遍历
						for(var i=0;i<this.length;i++){
							fn(i,this[i])
						}
					},
					css:function(){//Dom批量设置样式或获取
						var l=arguments.length;
						if(l==1){
							return this[0].style[arguments[0]]
						}else if(l==2){
						for(item in this){
							this[item].style[arguments[0]]=arguments[1]
						}
					}
					},
					toggle:function(){
						this[0].classList.toggle(arguments[0]);
					},
					
					
				})
			})();