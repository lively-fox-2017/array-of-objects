var arr = []

function createObj(name, phase, gender) {
    let obj = {
        Name: name,
        phase: phase,
        gender: gender
    }

    arr.push(obj);
    return arr;
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)
    // var arr =[{
    //     name: 'Akbar',
    //     phase: 1,
    //     gender: 'male'
    // },{
    //     name: 'Icha',
    //     phase: 1,
    //     gender: 'female'
    // },{
    //     name: 'Adhit',
    //     phase: 2,
    //     gender: 'male'
    // },{
    //     name: 'Tama',
    //     phase: 2,
    //     gender: 'male'
    // },{
    //     name: 'Rifky',
    //     phase: 3,
    //     gender: 'male'
    // }]

function getData(name) {
    var hasil = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].Name === name) {
            hasil.push(arr[i]);
        }
    }
    return hasil;
}

console.log(getData('Icha'))
console.log(getData('Tama'))
    // {
    //     name : 'Icha',
    //     phase : 1,
    //     gender: 'female'
    // }