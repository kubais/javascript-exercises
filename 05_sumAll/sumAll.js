

const sumAll = function(x, y) {

    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    if (x > y) {
        [x, y] = [y, x];
        // const temp = x;
        // x = y;
        // y = temp;
    }

    // second way to flip values: if (x > y) [x, y] = [y, x];
let sum = 0;
for (let i = x; i <= y; i++)
sum += (i);
return sum;
}


// Do not edit below this line
module.exports = sumAll;
