var arr =[];
function createObj(name,phase,gender){
	//code
	var newArr = 	{
						name : this.name = name,
						phase : this.phase = phase,
						gender : this.gender = gender
					}
	
	arr.push(newArr);
	
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Febri',1,'male');
createObj('Ashanti',1,'female');
createObj('Anang',1,'male');

console.log(arr);


// RELEASE 2

function getData(name){
	//Code
	var newArr = 	{
						name : this.name = name,
						phase : this.phase = phase,
						gender : this.gender = gender
					}
	return newArr;
}
console.log(getData('Icha'))

