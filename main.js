// Write unit tests for the following function:
// evens: Takes an array and returns a new array that only includes the elements at even indices from the original array.

// myArray: [0,1,2,3,4]
// output: [0,2,4]


var evenArray = function(inputArray) {

	var outputArray = [];
	var look = 0;

	for(var i=0; i<inputArray.length; i++) {
		if(inputArray[i] % 2 === 0){
			// outputArray.push([i]);
			outputArray.push(i);
		}
	}
	console.log('asdf');
	return outputArray;
}


// for loop that checks myArray's length
// if the array value is even (% 2 === 0)
// then add that value to outputArray 


