function main() {
    for (let row = 0; row < 8; row++) {
	for (let column = 0; column < 8; column++) {
	    if (row === 0) {
		strToPrint = "\u2500\u2500";
		if (column === 0) {
		    strToPrint = "\u250C" + strToPrint;
		}
		strToPrint += "\u252C";
		if (column === 7) {
		    strToPrint = strToPrint.slice(0, -1);
		    strToPrint += "\u2510";
		}
		process.stdout.write(strToPrint);
	    }
	}
	console.log();
	for (let column = 0; column < 8; column++) {
	    if (row == 0) {
		strToPrint = "\u2502  "
		if (column === 7) {
		    strToPrint += "\u2502"
		}
		process.stdout.write(strToPrint);
	    }
	}
    }
}

function printCellWithDiagonal() {
    console.log("\u250C--\u2510");
    console.log("|\\ |");
    console.log("| \\|");
    console.log("\u2514--\u2518");
}

function printEmptyCell() {
    console.log("\u250C--\u2510");
    console.log("|  |");
    console.log("|  |");
    console.log("\u2514--\u2518");
}

if (require.main === module) {
    main();
}
