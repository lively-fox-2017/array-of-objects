arr = []
function createObj(name, phase, gender) {

  var data = {
    name: name,
    phase: phase,
    gender: gender
  }

  arr.push(data)
}

createObj('Icha', 1, 'female')
createObj('Akbar', 1, 'male')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr);

function getData(name) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].name == name) {
      return arr[i]
    }
  }
  return -1
}

console.log(getData('Icha'));
