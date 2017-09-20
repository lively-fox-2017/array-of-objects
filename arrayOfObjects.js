'use strict'
var arr=[];
function createObj(name, phase, gender){
  var result={
    name: name,
    phase: phase,
    gender: gender,
  };
  return result;
}

function getData(name){
  for(let i=0; i<arr.length; i++){
    if(arr[i].name==name){
      return arr[i];
    }
  }
  return {};
}

arr.push(createObj('Akbar', 1, 'male'));
arr.push(createObj('Icha', 1, 'female'));
arr.push(createObj('Adhit', 2, 'male'));
arr.push(createObj('Tama', 2, 'male'));
arr.push(createObj('Rifky', 3, 'male'));

console.log(arr);
console.log();
console.log('Search data dari Icha: ',getData('Icha'));
