// Array is a generic. You can specify what type it contains.

function sum (array: Array<number>) { // alternative syntax: number[]

	return array.reduce(0, (soFar, next) => soFar + next);
}




class Array2d<T> {

	sizeX: number;
	sizeY: number;
	elements: Array<Array<T>>;

	constructor (sizeX: number, sizeY:number) {

		this.sizeX = sizeX;
		this.sizeY = sizeY;

		this.elements = new Array<T>(sizeY)
			.map(foo => new Array<T>(sizeX));
	}

	set (x: number, y: number, value: T) {

		this.elements[y][x] = value;
	}

	get (x: number, y: number) {

		return this.elements[y][x];
	}
}

const chessBoard = new Array2d<string>(8, 8);
chessBoard.set(1, 0, 'knight');
chessBoard.set(1, 0, 1337);


const transform3dMatrix = new Array2d<number>(4, 4);
transform3dMatrix.set(1, 0, 1.2345);
transform3dMatrix.set(1, 0, 'leet');


// The type must be specified explicitly, or it won't work.
const untyped = new Array2d(4, 4);
untyped.set(1, 0, 1.2345);
untyped.set(1, 0, 'leet');




// But generics can be implicitly typed too.
function map<T1, T2> (a: Array<T1>, f:(x:T1)=>T2): Array<T2> {

	return a.map(f);
}

// Look at the types of i and x!
const x = map([1, 2, 3], (i) => 'number: '+i);

// Mixed types are handeled properly too.
const x2 = map([1, 2, 'three'], (i) => 'number: '+i);

// Invalid function arguments won't compile.
const x3 = map([1, 2, 'three'], (i) => i*i);
