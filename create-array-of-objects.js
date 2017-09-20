var arr = [];
// =============FUNGSI UNTUK CREATE OBJECTS=============
function createObj(name, phase, gender) {
  var person = {
    Name: name,
    Phase: phase,
    gender: gender
  }
  arr.push(person);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');
console.log(arr);

// =============FUNGSI SEARCH NAME============
function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    // Jika Name(createObj) = getData(name) maka ambil data arr[i]
    if (arr[i].Name === name) {
      return arr[i];
    }
  }
}
console.log(getData('Icha'));
