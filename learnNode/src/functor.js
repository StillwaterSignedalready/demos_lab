var _ = require('ramda');

// functor 是实现了 map 函数并遵守一些特定规则的容器类型。
var Container = function(x){ // container构造函数
  this._value = x;
}

// 避免使用new
Container.of = x => {
  return new Container(x)
};

// functor的map函数
Container.prototype.map = function(f){
  return Container.of(f(this._value))
};





console.log('Done!')