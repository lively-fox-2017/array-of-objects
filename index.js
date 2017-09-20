var arr = []
function create(name,phase,gender) {
var base = {
    name:name,
    phase:phase,
    gender:gender
};
arr.push(base)
}
create('Akbar',1,'male')
create('Icha',1,'female')
create('Adhit',2,'male')
create('Tama',2,'male')
create('Rifky',3,'male')

console.log(arr)

function getData(name) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].name === name) 
    return arr[i]
  }
  return 'data not found'
}
console.log(getData('sddf'))
