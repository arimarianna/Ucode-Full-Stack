let checkDivision = function (beginRange = 1, endRange = 60) {
    for (let value = beginRange; value <= endRange; value++) {
        if(value % 2 === 0 && value % 3 === 0 && value % 10 === 0)
            console.log(`The number ${value} is divisible by 2, is divisible by 3, is divisible by 10`);
        else if (value % 2 === 0 && value % 10 === 0) {
            console.log(`The number ${value} is divisible by 2, is divisible by 10`);
        }
        else if (value % 2 === 0 && value % 3 === 0) {
            console.log(`The number ${value} is divisible by 2, is divisible by 3`);
        }
        else if (value % 2 === 0) {
            console.log(`The number ${value} is divisible by 2`);
        } else if (value % 3 === 0) {
            console.log(`The number ${value} is divisible by 3`);

        } else if (value % 10 === 0) {
            console.log(`The number ${value} is divisible by 10`);
        } else console.log(`${value} -`);
    }
}
module.exports.checkDivision = checkDivision;
