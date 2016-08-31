
function square (n: number) {

	return n*n;
}

// Fine and dandy.
square(42);


// This won't compile. Great!
square('forty-two');


// FFFFFFFFFFFFUUUUUUUUUUUUUUUUUUUUU
let x;
x = 'foo';
square(x);

// Variables typed `any` turns type checking off, even if the function is typed.

// With no-implicit-any you can avoid some of that.

const z: any = 'foo';
square(z);

// ...but not all.
