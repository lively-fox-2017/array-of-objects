var arr = []

// ========== RELEASE 0 ==========
function createObj(name, phase, gender){

    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }

    arr.push(obj)

    return arr

}

// ========== RELEASE 1 ==========
function getData(name){

    for(var i = 0; i < arr.length; i++){
        if(arr[i].name.toLowerCase() === name.toLowerCase()){
            return arr[i]
        }
    }
    return 'not-found'

}

console.log(createObj('Akbar', 1, 'male'))
console.log(createObj('Icha', 1, 'female'))
console.log(createObj('Adhit', 2, 'male'))
console.log(createObj('Tama', 2, 'male'))
console.log(createObj('Rifky', 3, 'male'))

console.log(getData('icha'))