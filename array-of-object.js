var arr = [];
function createObj(name, phase, gender){
  let arrObj = {
    name : name,
    phase : phase,
    gender : gender,
  }
  arr.push(arrObj);
}

function getData(nama){
  let count = 0;
  while(count < arr.length){
    if(nama === arr[count].name){
      return arr[count];
    }
    count++
  }
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr);

console.log(getData('Icha'));
