
function square (n: number) {

	return n*n;
}

// Fine and dandy.
square(42);


// Also fine. Wait... Sh*t.
square(null);


// null and undefined is a valid value for all types.

// With TS 2.0 (coming soon), you can disable that with --strictNullChecks .

const array = [1, 2, 3];
const found: number | undefined = array.find(x => false);
if (found !== undefined) {

	// OK, because type-guard.
	square(found);

} else {

	// Will not compile.
	square(found);
}

