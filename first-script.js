$(document).ready(function() {
/*	var data = [['cat','dog','duck','bird'],['bob','doug','frank','george']];

	data.forEach(function(value, index, arr) {
		value.forEach(function() {
			arguments[0] 
		});
	});
*/
	
	var filler = function(value) {
		var newValue = value + ' test';
		return newValue;
	}

	var animalMap = ['cat1','dog','duck','bird'];

	var newAnimalMap = animalMap.map(filler);

	console.log(newAnimalMap);

	newAnimalMap.forEach(function(newAnimalMapValues, index, arr) {

		if(index === (arr.length - 1)) {
			document.getElementById('test').innerHTML += newAnimalMapValues;			
		} else {
			document.getElementById('test').innerHTML += newAnimalMapValues + ', ';
		}

	})

});

