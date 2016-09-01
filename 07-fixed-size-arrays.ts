
// The ES6 datastructure Map has a signature like this:
class Map<T1, T2> {

	constructor (a: Array<[T1, T2]>) {}
}

// It takes an array of 2-element arrays.
const colors = [
	['green', '#00ff00'],
	['orange', '#ff8800'],
	['lightBlue', '#8899ff']
];

//...eh?
const colorMap = new Map(colors);


// Typescript sees `colors` as an array of arrays, not fixed-size arrays.

// Cast...
const colorMapFixed1 = new Map(<Array<[string, string]>> colors);
const colorMapShouldNotCompile = new Map(<Array<[string, number]>> colors);

// ...or be explicit from the beginnig.
const colorsFixed = [
	<[string, string]> ['green', '#00ff00'],
	<[string, string]> ['orange', '#ff8800'],
	<[string, string]> ['lightBlue', '#8899ff']
];
const colorMapFixed2 = new Map(colorsFixed);









const numbers = [
	['pi', 3.1416],
	['e', 2.7183],
	['sqrt2', 1.1414]
];

// Good so far.
const numberMapFixed1 = new Map(<Array<[string, number]>> numbers);

// FFFFFFFFFFFFFUUUUUUUUUUUUUUUUUUU
// Look at the type of `numberMapShouldNotCompile`. What will happen when I start using it?
const numberMapShouldNotCompile = new Map(<Array<[string, string]>> numbers);

// This better not be breakable.
const numbersFixed = [
	<[string, number]> ['pi', 3.1416],
	<[string, number]> ['e', 2.7183],
	<[string, number]> ['sqrt2', 1.1414]
];

// Phew!
const numbersFixedBroken = [
	<[number, string]> ['pi', 3.1416],
	<[number, string]> ['e', 2.7183],
	<[number, string]> ['sqrt2', 1.1414]
];
