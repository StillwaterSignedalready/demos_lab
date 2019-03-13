class Animal {
  private name: string; // 大概只能this.name这样访问
  public constructor(name: string) {
      this.name = name;
  }
}

let a = new Animal('Jack');

a.name

class Cat extends Animal {
  constructor(name){
    super(name)
    this.name = 'h'; // 如果name是protected便可以访问
  }
}

abstract class Anima { // 抽象类不可实例化
  public name;
  public constructor(name){
    this.name = name;
  }
  public abstract sayHi() // 抽象方法必须被子类实现
}

class Dog extends Anima {
  public eat() {
      console.log(`${this.name} is eating.`);
  }

  // sayHi(){}
}

class Person{
  private name: string = 'ee';
  public age: number;
  constructor(age: number){
    this.age = age
  }
}

let ani: Animal = new Animal('e')

