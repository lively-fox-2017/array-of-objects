var array= []
function createObj(name, phase, gender) {
  let object= {
    name: name,
    phase: phase,
    gender: gender
  }

  return array.push(object)
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',1,'male');
createObj('Tama',1,'male');
createObj('Rifky',1,'male');
console.log(array);

function getData(name) {
  let data = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      data.push(array[i])
    }
  }
  return data
}
console.log('===============================================');
console.log(getData('Icha'));
