/// <reference path="./assert.d.ts">
function getLen(sth: string | number): number{
  if((<string>sth).length){
    return (<string>sth).length;
  }else{
    return sth.toString().length;
  }
}

