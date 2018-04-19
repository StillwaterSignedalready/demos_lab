var _ = require('ramda');

// functor 是实现了 map 函数并遵守一些特定规则的容器类型。
var Container = function(x){ // container构造函数
  this._value = x;
}

// 避免使用new
Container.of = x => {
  return new Container(x)
};

// functor的map函数,它可以这样用：functor.of(who).map(foo).map(bar).map(whatever)
// 这样的好处：1 我们可以把注意力集中在map的参数上 2 作用类似于compose
// 说map是functor的本体也不为过
Container.prototype.map = function(f){
  return Container.of(f(this._value))
};

/** ========================================================== */

var Maybe = function(x){ // 构造函数
  this._value = x;
}

Maybe.of = function(x){
  return new Maybe(x);
}

Maybe.prototype.isNothing = function(){ // 判断value是否falsy
  return (this._value == null || this._value == undefined);
}

// 与之前的.map不同的是：值为null的functor如果map很可能会直接报错
// 而Maybe的map会在运作前截流
Maybe.prototype.map = function(f){
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value))
}

//  map :: Functor tor => (a -> b) -> tor a -> tor b
// it can be used like: compose(map(foo),map(bar))(Maybe.of(1))
var map = _.curry(function(f, any_functor_at_all){
  return any_functor_at_all.map(f)
})

console.log('Done!')