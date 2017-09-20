var arr = [];

function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase: phase,
    gender: gender,
  }
  arr.push(obj);
}

createObj('Saptanto', 1, 'male');
createObj('Sindu', 1, 'male');
console.log(arr);
