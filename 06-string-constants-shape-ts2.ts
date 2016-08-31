
/*

interface Shape {
	type: 'circle' | 'square',
	size: number // "size" is kind of awkard. Ambiguous.
};

*/


// We would want separate types, with clear names.

interface Circle {
    type: "circle";
    radius: number;
}

interface Square {
    type: "square";
    sideLength: number;
}


// With TS 2.0, we can!

type Shape = Circle | Square;

const myCircle: Shape = {
	type: 'circle',
	radius: 3
};

const mySquare: Shape = {
	type: 'square',
	sideLength: 3
};

const myIllegalCircle: Shape = {
	type: 'circle',
	sideLength: 3
};

const myIllegalHexagon: Shape = {
	type: 'hexagon',
	radius: 3
};
