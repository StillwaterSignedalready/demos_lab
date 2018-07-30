var _ = require('ramda');
var curry = _.curry;
var compose = _.compose;

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
// Maybe的字面含义: 例如Maybe.of(obj.sth).map(foo)的意思就是——
// 或许有obj.sth这么个值，有的话就传给foo，没有的话就不调用foo，直接返回null
// 这样就杜绝了这种错误：undefined.xx
Maybe.prototype.map = function(f){
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value))
}

//  map :: Functor tor => (a -> b) -> tor a -> tor b
// it can be used like: compose(map(foo),map(bar))(Maybe.of(1))
var map = _.curry(function(f, any_functor_at_all){
  return any_functor_at_all.map(f)
})

/** ========================================== */

var safeHead = function(xs){
  return Maybe.of(xs[0]);
};

var streetName = _.compose(map(_.prop('street')), safeHead, _.prop('addresses'));

// 
var withdraw = _.curry(function(amount, account){
  return account.balance >= amount ?
    Maybe.of({balance: account.balance - amount}) :
    Maybe.of(null);
})

var remainingBalance = a => a;
var updateLedger = a => a;

var finishTransaction = _.compose(remainingBalance, updateLedger);

// maybe :: b -> (a->b) -> Maybe a -> b
var maybe = _.curry(function(x, f, m){
  return m.isNothing() ? x : f(m._value);
});

var getTwenty = compose(maybe("You're broke!", finishTransaction) ,withdraw(20));

// ============================================

var Left = function(x){
  this._value = x;
}

Left.of = function(x){
  return new Left(x);
}

Left.prototype.map = function(f){
  return this;
}

var Right = function(x){
  this._value = x;
}

Right.of = function(x){
  return new Right(x);
}

Right.prototype.map = function(f){
  return Right.of(f(this._value));
}

var getAge = function(now, user){
  var birthdate =  moment(user.birthdate, 'YYYY-MM-DD');
  if(!birthdate.isValid()) return Left.of("Birth date could not be parsed");
  return Right.of(now.diff(birthdate, 'years'));
}

//  either :: (a -> c) -> (b -> c) -> Either a b -> c
var either = curry(function(f, g, e){
  switch(e.constructor){
    case Left: return f(e._value);
    case Right: return g(e._value);
  }
})

// IO 把非纯执行动作（impure action）捕获到包裹函数里，目的是延迟执行这个非纯动作
// 这就导致IO.map仍然是pure操作，只有最后调用._value为非纯(因为._value()的结果依赖外部数据)
var IO = function(f){
  this._value = f;
}

IO.of = function(x){
  return new IO(function(){
    return x
  })
}

IO.prototype.map = function(f){
  return new IO(_.compose(f,this._value)); // here is the different!!
}

var io_window = new IO(function(){return module});

// =============================

var fs = require('fs');
var Task = require('data.task')

var readFile = function(fileName){
  return new Task(function(reject, result){
    fs.readFile(fileName, 'utf-8', function(err, data){
      err ? reject(err) : result(data);
    });
  })
}

readFile("metamorphosis").map(_.split('\n')).map(_.head);

var dbUrl = function(c) {
  return (c.uname && c.pass && c.host && c.db) // 检测interfaces
    ? Right.of("db:pg://"+c.uname+":"+c.pass+"@"+c.host+"5432/"+c.db)
    : Left.of(Error("Invalid config!"));
}

//  connectDb :: Config -> Either Error (IO DbConnection)



var id = x => x + 1;

var idLaw1 = map(id);
var idLaw2 = id;

var compLaw1 = compose(map(_.concat(" world")), map(_.concat(" cruel")));
var compLaw2 = map(compose(_.concat(" world"), _.concat(" cruel")));

var Compose = function(f_g_x){
  this.getCompose = f_g_x;
}

// map :: (a -> b) -> Compose
Compose.prototype.map = function(f){
  return new Compose(map(map(f), this.getCompose));
}

console.log('Done!')