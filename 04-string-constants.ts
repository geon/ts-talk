
type CreativeColor = '#ffff66' | '#802000' | '#0099ff';

function foo(c: CreativeColor) {

	console.log(c+' is a creative color!')
}

foo('#0099ff');

// Green is not a creative color.
foo('#00ff00');
