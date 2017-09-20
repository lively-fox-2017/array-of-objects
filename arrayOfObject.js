let arr = [];

function createObj(name, phase, gender) {
    let data = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(data);
}
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');
console.log(arr);
// console.log(arr.length)

function getData(nama) {
    for (var a = 0; a < arr.length; a++) {
        if (arr[a].name === nama) {
            return arr[a];
        }
    }
}
console.log(getData('Icha'));