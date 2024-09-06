const sumAll = function(min, max) {

    if (!Number.isInteger(min) || !Number.isInteger(max))
        return "ERROR"; //if min/max are not int throw error
    if (min < 0 || max < 0) 
        return "ERROR"; //if min/max are not positive throw error
    if (min > max) { //swap the max and min with the num
        let num = min;
        min = max;
        max = num;
    } 

    let sum = 0;
    for (let i = min; i <= max; i++) { //i must be <= to max
        sum += i; //increment and add to the sum each loop
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
