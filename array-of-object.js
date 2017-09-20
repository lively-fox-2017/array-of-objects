"use strict"

var arr = []

function createObj(name, phase, gender){
  var obj = {
    name: name,
    phase: phase,
    gender: gender
  }

  return arr.push(obj)

}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

//Release 1

function getData(name){
  for (let i = 0; i < arr.length; i++){
    var data = false;
    if (arr[i].name === name) {
       data = true;
       return arr[i];
    }
  }
  return data;

}

console.log(getData('Tama'));
console.log(getData('Teti'));
console.log(getData('Icha'));
