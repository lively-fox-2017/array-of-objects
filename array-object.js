var arr = []

function createObj(name, phase, gender) {
    var obj = {
      name: name,
      phase: phase,
      gender: gender
    }

    arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 2, 'female')
createObj('Otong', 3, 'male')
createObj('Sukeka', 4, 'female')

console.log(arr);

function getData(name) {
    var tampung = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name === 'Icha') {
        tampung.push(arr[i])
      }
    }
    return tampung
}
console.log('<<<<<<<<<<<<<< || >>>>>>>>>>>>>>');
console.log(getData('Icha'));
