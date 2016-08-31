
interface Shape {
	type: 'circle' | 'square',
	size: number
};


const myShape: Shape = {
	type: 'circle',
	size: 3
};

const myIllegalShape: Shape = {
	type: 'hexagon',
	size: 3
};
