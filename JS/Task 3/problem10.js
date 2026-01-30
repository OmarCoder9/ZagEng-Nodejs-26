const arrayModification = (arr) => {
    return arr.map((el) => {
        if(el % 2 === 0)
            el++;
        else el--;
        return el;
    })
}
console.log(arrayModification([73, 221, 52, 214]));
