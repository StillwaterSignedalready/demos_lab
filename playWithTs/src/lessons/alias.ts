type Name = string;
type n = () => string;
type NameOrn = Name | n; // alias常用于联合类型

type EventNames = 'click' | 'scroll' | 'mouseover'; // 字符串三选一，否则报错

function handleEvents(ele: Element, event: EventNames){
  event
}

handleEvents(document.getElementById('hello'), 'click');