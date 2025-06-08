const getTheTitles = function(array) {
    let newArr = array.reduce((arr,book) => {
        arr.push(book.title)
        return(arr)
    }, []);
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
