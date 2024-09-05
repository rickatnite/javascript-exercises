const removeFromArray = function(array, ...theRest) {
    let arr = []; //new empty array
    array.forEach((item) => { //iterate using forEach
        if (!theRest.includes(item)) { //exclude items that match theRest
            arr.push(item); //push remaining items to arr
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
