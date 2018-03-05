class Observer{
	constructor(data, render){
		this.data = data;
		this.render = render;
		this.walk(data);
		this.callbacks = {};
	}

	walk(obj){
		let val;
		for(let key in obj){
			if(obj.hasOwnProperty(key)){
				val = obj[key];
				// 如果是对象则继续深挖
				if(typeof val === 'object'){
					new Observer(val, this.render);
				}
				// 监控每个节点
				this.convert(key, val);
			}
		}
	}

	/**
	 * 对data对象上的单个属性设置监听，val存于get和set的私有作用域中(闭包)
	 * @param  {string} key 属性
	 * @param  {*} val key对应的值
	 */
	convert(key, val){
		const self = this;
		Object.defineProperty(this.data, key, {
			enumerable: true,
			configurable: true,
			get: function(){
				console.log('你访问了' + key);
				return val;
			},
			set: function(newValue){
				console.log('你设置了' + key, '新的' + key + ' = ' + newValue);
				if(self.callbacks[key] instanceof Array){
					for(let callback of self.callbacks[key]){
						callback(key, val, newValue);
					}
				}
				if(typeof newValue === 'object'){
					new Observer(newValue);
				}
				val = newValue;
				if(self.render instanceof Function){
					self.render();
				}
			}
		} );
	}

	/**
	 * 使得data中新添加的属性也有同样的getter和setter
	 * @param {string} key   
	 * @param {*} value 
	 */
	$add(key, value){
		this.data[key] = value;
		this.convert(key, data[key]);
	}

	/**
	 * 监控key对应的value，一旦改动则调用callback
	 * 设置一个数组callbacks，$watch将callback推送到callbacks
	 * 每当set被调用，则遍历callbacks，调用每个callback
	 * @param  {[type]}   key      [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	$watch(key, callback){
		if(callback instanceof Function){
			if(!this.callbacks[key]){
				this.callbacks[key] = [];
			}
			this.callbacks[key].push(callback);
		}else{
			throw(new Error('not a function'));
		}
	}


}

class Vue{
	constructor(obj){
		this.$el = document.querySelector(obj.el);
		this.data = obj.data;
		this.ob = new Observer(obj.data, this.render.bind(this));
	}

	parseTextExp(text,data) {
		let regText = /\{\{(.+?)\}\}/g;
		let pieces = text.split(regText);
		let matches = text.match(regText);
		let result = [];
		pieces.forEach(function (piece) {
			if(matches && matches.indexOf('{{' + piece + '}}') > -1){ //包含数据的项
				let properties = piece.split('.');
				let datas = data;
				properties.forEach(function(value){
				  datas = datas[value];
				});
				result.push(datas);
			}else if(piece){ //正常项
				result.push(piece);
			}
		});
		return result.join('');
	}

	render(){
		console.log('render');
		const el = this.$el;
		
		el.innerHTML = this.parseTextExp(el.innerHTML, this.data);
	}
}

let obj = {
	el: '#app',
	data:{
	    user: {
	        name: "liangshaofeng",
	        age: "24"
	    },
	    address: {
	        city: "beijing"
	    },
	    a: 'aa'
	}
};

let app = new Vue(obj);

// app.$watch('a', function(key, value, newValue){
// 	console.log(`OH, you change ${key} to ${newValue}`)
// })

