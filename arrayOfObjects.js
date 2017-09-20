let arr = [];

function createObj(name, phase, gender) {
	let obj = { name, phase, gender }
	arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

function getData(name) {
	return arr.filter(obj => obj.name === name);
}

console.log(getData('Icha'));