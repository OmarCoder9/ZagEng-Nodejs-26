const getUnseenNumbers = (arr) => {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
}
console.log(getUnseenNumbers([1, 1, 1, 2, 1, 1]))
console.log(getUnseenNumbers([2, 4, -2]));

