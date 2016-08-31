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

