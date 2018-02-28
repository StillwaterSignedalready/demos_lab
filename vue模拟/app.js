class Observer{
	constructor(data){
		this.data = data;
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
					new Observer(val);
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
				for(let callback of self.callbacks[key]){
					callback(key, val, newValue);
				}
				if(typeof newValue === 'object'){
					new Observer(newValue);
				}
				val = newValue;
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

let data = {
    user: {
        name: "liangshaofeng",
        age: "24"
    },
    address: {
        city: "beijing"
    },
    a: 'aa'
};

let app = new Observer(data);

app.$watch('a', function(key, value, newValue){
	console.log(`OH, you change ${key} to ${newValue}`)
})