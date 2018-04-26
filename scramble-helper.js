'use strict';

let greeting = 'js is great!';

greeting = greeting.split("");


function charSwap(greeting) {
// Swap random elements in an array with each other
	let item1 = Math.floor(Math.random() * 10);
	let item2 = Math.floor(Math.random() * 10);

	[greeting[item1], greeting[item2]] = [greeting[item2], greeting[item1]];
	
	// let letter1 = greeting[item1];
	// let letter2 = greeting[item2];

	// greeting[item1] = letter2;
	// greeting[item2] = letter1;

	return greeting.join("");
}

console.log(charSwap(greeting));

const candies = new Map();

candies.set('red', 'cherry');
candies.set('green', 'apple');
candies.set('blue', 'blueberry');
candies.set('orange', 'clementine');
candies.set('yellow', 'banana');

for (let candy of candies) {
	console.log(`The ${candy[1]} flavor is colored ${candy[0]}.`);
}

function candyLookup(color) {
	if (candies.has(color)) {
		console.log(candies.get(color));
	} else {
		console.log(`Sorry, ${color} doesn't have a flavor`);
	}
}

candyLookup('purple');
candyLookup('red');

// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
