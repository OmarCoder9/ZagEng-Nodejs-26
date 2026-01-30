const filterFunc = function (arr){
    return arr.filter((el) => el.length > 4)
}
let arr = ["hi", "Hello", "Welcome"];
let newArr = filterFunc(arr);
console.log(newArr);
