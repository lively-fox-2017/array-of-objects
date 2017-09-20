var arr = [];
let createObj = (name, phase, gender) => {
  var objek = {
    name: name,
    phase: phase,
    gender: gender
  };
  return arr.push(objek)
}
createObj(['akbar', 'kamal'], 1, 'male');
createObj('Burhan', 1, 'male');
createObj('Kautsar', 1, 'male');
createObj('Phenex', 1, 'female');

console.log('Release 0');
console.log(arr);

let getData = (nama) => {
  let kelompok =[]
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i].name === nama) {
      kelompok.push(arr[i]);
    }
  }
  return kelompok;
}

console.log('Release 1');
console.log(getData('Burhan'));
// console.log(getData('female'));