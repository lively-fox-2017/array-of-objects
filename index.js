var arr=[]

function createObj(name, phase, gender){
	let myObject={}
	myObject.name = name
	myObject.phase = phase
	myObject.gender = gender

	arr.push(myObject)

	return arr;
}

createObj('akbar',1,'male')
createObj('icha',1,'female')
createObj('adhit',2,'male')
createObj('Tama',2,'male')
console.log(createObj('Rifky',3,'male'))

function getData(name){
	for(let i=0;i<arr.length;i++){
		if(arr[i].name===name){
			return arr[i]
		}
	}
}

console.log(getData('akbar'))
console.log(getData('icha'))