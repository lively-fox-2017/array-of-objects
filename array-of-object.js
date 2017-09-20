arr = []
function createObj(name, phase, gender) {

  var data = {
    name: name,
    phase: phase,
    gender: gender
  }

  arr.push(data)
}

createObj('icha', 1, 'female')
createObj('Akbar', 1, 'male')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr);
