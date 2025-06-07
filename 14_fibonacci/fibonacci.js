const fibonacci = function(num) {
    let fib1 = 0;
    let fib2 = 0;
    let sum = 0;
    let arr = [];

    if (num < 0) {
        let opps = "OOPS";
        return opps;
    }
    else if (num == 0) {
        return 0;
    }
    else {
        for (let i = 1; i <= num; i++) {
            if (i == 1) {
                fib1 = i;
                arr.push(fib1);
            }
            else if (i == 2) {
                fib1 = i - 1;
                arr.push(fib1);
            }
            else {
                fib1 = arr[i - 2] * 1;
                fib2 = arr[i - 3] * 1;
                sum = Number(fib1 + fib2);
                arr.push(sum);
            }
        }
    }

    console.log(arr);

    let lastNum = arr.length - 1;

    let reNum = arr[lastNum];
    
    reNum = Number(reNum);

    return reNum;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
