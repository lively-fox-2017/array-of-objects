var arr=[];
function createObj(name,phase,gender){
  arr.push({name:name,phase:phase,gender:gender});
}
function getData(name){
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].name);
    if (arr[i].name.toUpperCase()==name.toUpperCase()){
      return arr[i];
    };
  }
  return 'data not found!'
}
createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');
console.log(arr);
console.log(getData('icha'));
