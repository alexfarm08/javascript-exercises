const leapYears = function(year) {
    let condition1 = year % 4;
    let condition2 = year % 100;
    let condition3 = year % 400;

    if (condition1 == 0) {
        if (condition2 == 0) {
            if (condition3 == 0) {
                return true;
            }
            return false;
        }
        else if (!condition2 == 0) {
            return true;
        }
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
