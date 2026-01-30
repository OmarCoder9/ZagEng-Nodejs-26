const getAvarage = (arr) =>{
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    return sum / arr.length;
}

let arr = [10, 20, 30]
console.log(getAvarage(arr));
