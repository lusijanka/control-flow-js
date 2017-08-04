// var
var a= 2;
var b= 3;
var result = (a * a) + (2 * a * b) - (b * b);
console.log(result);
if (result < 0) {
	console.log('The result is below zero');
} else if (result > 0) {
	console.log('The result is above zero');
} else {
	console.log('It seems the result is equal to 0!');
};

// function
function value(a,b) {
	var result = (a * a) + (2 * a * b) - (b * b);
	if (result < 0) {
	console.log('The result is below zero');
	} else if (result > 0) {
	console.log('The result is above zero');
	} else {
		if (isNaN(a) || isNaN(b)) == true {
			console.log('You have not entered the valid number');
		} else {
			console.log('It seems the result is equal to 0!');
		};
	};
return result;
};

console.log(value(5,4));