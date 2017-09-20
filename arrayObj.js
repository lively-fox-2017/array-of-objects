 var arr = [];
 function creatObj(name, phase, gender){
     let obj1 = {
         Name: name,
         phase: phase,
         gender: gender
     }
    
     arr.push(obj1);
     return arr;
 }
 console.log(creatObj('akbar', 1, 'male'));
 console.log(creatObj('icha', 1, 'female'));
 console.log(creatObj('adhit', 2, 'male'));
 console.log(creatObj('tama', 2, 'male'));
 console.log(creatObj('rifky', 3, 'male'));
 console.log('----------------');
 
 function getData (name){
     var temp = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i].Name === name){
            temp.push(arr[i]);
        }
    }
    return temp;
 }
 
 console.log(getData('icha'));