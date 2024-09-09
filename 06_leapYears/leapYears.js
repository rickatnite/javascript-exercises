const leapYears = function(year) {

    let divFour = year % 4 === 0;
    let divCentury = year % 100 === 0;
    let divFourHundred = year % 400 === 0;

    if (divFour && !divCentury || divFourHundred) {
        return true;
    } else {return false;}

};

// Do not edit below this line
module.exports = leapYears;
