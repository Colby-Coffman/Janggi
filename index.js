// TODO(colby): character constants
// TODO(colby): look at board with "pieces"
// TODO(colby): hardcode board
// TODO(colby): board object abstraction
/**
option 1
┌─┬─┬─┬─┬─┬─┬─┬─┐
│ │ │ │\│/│ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │/│\│ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │ │ │ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │ │ │ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │ │ │ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │ │ │ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │\│/│ │ │ │
├─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │/│\│ │ │ │
└─┴─┴─┴─┴─┴─┴─┴─┘
option 2
┌──┬──┬──┬──┬──┬──┬──┬──┐
│  │  │  │\ │ /│  │  │  │
│  │  │  │ \│/ │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │ /│\ │  │  │  │
│  │  │  │/ │ \│  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │  │  │
│  │  │  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │  │  │
│  │  │  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │  │  │
│  │  │  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │  │  │
│  │  │  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │\ │ /│  │  │  │
│  │  │  │ \│/ │  │  │  │
├──┼──┼──┼──┼──┼──┼──┼──┤
│  │  │  │ /│\ │  │  │  │
│  │  │  │/ │ \│  │  │  │
└──┴──┴──┴──┴──┴──┴──┴──┘
*/
function main() {
    for (let row = 0; row < 8; row++) {
	for (let column = 0; column < 8; column++) {
	    strToPrint = "\u2500\u2500";
	    if (row === 0) {
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
	    else {
		if (column === 0) {
		    strToPrint = "\u251C" + strToPrint;
		}
		strToPrint += "\u253C";
		if (column === 7) {
		    strToPrint = strToPrint.slice(0, -1);
		    strToPrint += "\u2524";
		}
		process.stdout.write(strToPrint);
	    }
	}
	console.log();
	for (let column = 0; column < 8; column++) {
	    strToPrint = "\u2502";
	    if (column === 7) {
		strToPrint += "  \u2502";
	    }
	    else if ((([0, 6].includes(row)) && (column === 3)) ||
		     (([1, 7].includes(row)) && (column === 4))) {
		strToPrint += "\\ "
	    }
	    else if ((([0, 6].includes(row)) && (column === 4)) ||
		     ([1, 7].includes(row)) && (column === 3)) {
		strToPrint += " /"
	    }
	    else {
		strToPrint += "  ";
	    }
	    process.stdout.write(strToPrint);
	}
	console.log();
	for (let column = 0; column < 8; column++) {
	    strToPrint = "\u2502";
	    if (column === 7) {
		strToPrint += "  \u2502";
	    }
	    else if ((([0, 6].includes(row)) && (column === 3)) ||
		     (([1, 7].includes(row)) && (column === 4))) {
		strToPrint += " \\"
	    }
	    else if ((([0, 6].includes(row)) && (column === 4)) ||
		     ([1, 7].includes(row)) && (column === 3)) {
		strToPrint += "/ "
	    }
	    else {
		strToPrint += "  ";
	    }
	    process.stdout.write(strToPrint);
	}
	console.log();
	if (row === 7) {
	    for (let column = 0; column < 8; column++) {
		strToPrint = "\u2500\u2500";
		if (column === 0) {
		    strToPrint = "\u2514" + strToPrint;
		}
		strToPrint += "\u2534"
		if (column === 7) {
		    strToPrint = strToPrint.slice(0, -1);
		    strToPrint += "\u2518";
		}
		process.stdout.write(strToPrint);
	    }
	    console.log();
	}
    }
}

if (require.main === module) {
    main();
}
