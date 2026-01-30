const replaceSpaces = (str) => {
    return str.split(' ').join('#')
}
console.log(replaceSpaces("Hello World"));


/* Another Solution*/

const replaceSpaces2 = (str) => {
    return str.replace(' ', '#')
}
console.log(replaceSpaces2("Hello World"));
