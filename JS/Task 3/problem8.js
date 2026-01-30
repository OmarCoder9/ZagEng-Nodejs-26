const removeSpecialChar = (str) => {
    const unAllowedChar = ['$', '!', '@', '#', '.', '?']
    return str.split('').filter(char => !unAllowedChar.includes(char)).join('')
}

console.log(removeSpecialChar("Hi How are you!"));
console.log(removeSpecialChar("Are-u_coming?"));

