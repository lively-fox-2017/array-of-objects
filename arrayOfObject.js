//release 0
var arr=[]
function createObj(name,phase,gender){
  var obj={
    name: name,
    phase: phase,
    gender:gender
  }
  arr.push(obj)
}
createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Ryan',2,'male');
createObj('Adit',2,'male');

console.log(arr);

function getData(name){
  // var i=0
  var tempr=[]

  for (var i = 0; i < name.length; i++) {4
    if(name===arr[i].name){
      tempr.push(arr[i]);
    }
  }
  return tempr
}
//pencarian
console.log(getData('Icha'));
