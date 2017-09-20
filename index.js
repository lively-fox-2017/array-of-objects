var arr = [];

function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase: phase,
    gender: gender,
  }
  arr.push(obj);
}

function getData(name) {
  let result = {};
  let indexResult = -1;
  arr.forEach(function(curr, index) {
    if (curr.name === name)
      indexResult = index;
  });
  return (indexResult === -1) ? "Not Found" : arr[indexResult];
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 1, 'male');
createObj('Tama', 1, 'male');
createObj('Rifky', 1, 'male');
console.log(arr);
console.log(getData("Sindu"));
console.log(getData("Akbar"));
