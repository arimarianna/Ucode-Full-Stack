let beginRange = prompt('Enter the numbers for the beggining a range', '1');
let endRange = prompt('Enter the numbers for the end a range', '100');
checkDivision(beginRange, endRange)

function checkDivision(beginRange, endRange) {
    for (let value = beginRange; value <= endRange; value++) {
        if (value % 2 == 0 && value % 3 == 0 && value % 10 == 0) {
            console.log(`${value} - is even, a multiple of 3, a multiple of 10`);

        } else if (value % 2 == 0 && value % 10 == 0) {
            console.log(`${value} - is even, a multiple of 10`);

        } else if (value % 2 == 0 && value % 3 == 0) {
            console.log(`${value} - is even, a multiple of 3`);

        } else if (value % 3 == 0) {
            console.log(`${value} - is a multiple of 3`);

        } else if (value % 2 == 0) {
            console.log(`${value} - is even`);
        } else console.log(`${value} -`);
    }
}
