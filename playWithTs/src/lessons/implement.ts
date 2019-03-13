interface Alarm {
  alert() : string;
}

interface Light{
  lightOn();
  lightOff();
}

class Door{

}

class SecurityDoor extends Door implements Alarm{ // 继承类&继承接口
  alert() : void {
    console.log('alert');
  }
}

class Car implements Alarm, Light{ // 可继承多个接口
  alert(){
    console.log('didu')
  }
}

interface LightableAlarm extends Alarm{ // 接口继承接口
  lightOn();
  lightOff();
}

class Point{
  x: number;
  y: number;
}

interface Point3d extends Point{ // 接口继承类
  z: number;
}

let point: Point3d = {x:1, y: 1, z: 1}

interface Counter{
  (start: number): string; // 定义函数自身
  interval: number;
  reset(): void;
}

function getCounter(): Counter{
  let counter = <Counter>function(start: number){return ''}
  counter.interval = 123;
  counter.reset = function(){};
  return counter;
}