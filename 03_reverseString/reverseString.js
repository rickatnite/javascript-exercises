const reverseString = function(string) {
    let str = "";
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }
    let arr2 = arr.reverse().join("");
    return arr2.toString();

};

// Do not edit below this line
module.exports = reverseString;
