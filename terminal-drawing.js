var math = require('mathjs');

function draw() {

}

draw.drawMatrix = function drawMatrix(i, j, char) {
	var matrix = new Array(10);
	for(var i=0; i<10;i++) {
		matrix[i] = new Array(10);
		for(var j=0;j<10;j++) {
			matrix[i][j] = char;
		}
	}

	printMatrix(matrix);
}

function printMatrix(matrix) {
	for(var i=0; i<10;i++) {
		for(var j=0;j<10;j++) {
			process.stdout.write(matrix[i][j] + ' ');
		}
		process.stdout.write('\n');
	}
}

draw.drawCircle = function drawCircle(i, j, char) {
	var matrix = new Array(10);
	for(var i=0; i<10;i++) {
		matrix[i] = new Array(10);
		for(var j=0;j<10;j++) {
			matrix[i][j] = ' ';
		}
	}

	var r = 5;
	// var x = 5;
	// var y = 5;

	for(var x=r;x>=0;x--) {
		var y = math.sqrt((r*r) - (x*x));
		console.log("x: ", x, ", y:", y);
		matrix[x][y] = char;
	}
	printMatrix(matrix);
}


module.exports = draw;