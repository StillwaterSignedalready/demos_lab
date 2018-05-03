/// <reference path="./assert.d.ts">
function getLen(sth: string | number): number{
  if((<string>sth).length){
    return (<string>sth).length;
  }else{
    return sth.toString().length;
  }
}

Math.pow(1,'2')

document.addEventListener('click', function(e) {
  console.log(e.targetCurrent);
});