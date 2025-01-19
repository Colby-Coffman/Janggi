function main() {
    for (let i = 0; i < 8; i++) {
	strToPrint = "\u2500\u2500"
	if (i == 0) {
	    strToPrint = "\u250C" + strToPrint
	}
	strToPrint += "\u252C"
	if (i == 7) {
	    strToPrint = strToPrint.slice(0, -1)
	    strToPrint += "\u2510"
	}
	process.stdout.write(strToPrint);
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
