{
    console.log("Problem 1");
    let str = prompt("Enter a string");
    console.log("The length of the string is", str.length);
    console.log("The First character", str.charAt(0));
    console.log("The last character", str.charAt(str.length - 1));
}
{
    console.log("Problem 2");
    let str = prompt("Enter a string with extra spaces at the beginning and end.");
    console.log("String without extra spacing", str.trim());
    console.log("String as a lowercase", str.trim().toLowerCase());
}
{
    console.log("Problem 3");
    let arr = []
    for (let index = 0; index < 5; index++) {
        arr[index] = parseInt(prompt(`Enter the element number ${index + 1}`));
    }
    console.log("The array", arr);
    console.log("It's length", arr.length);
    console.log("The first element", arr[0], "the last element", arr[4]);
}
{
    console.log("Problem 4");
    for (let index = 1; index <= 20; index++) {
        if(index === 10) {continue;}
        console.log("The current number is", index);
    }
}
{
    console.log("Problem 5");
    let arr = []
    for (let index = 0; index < 5; index++) {
        arr[index] = parseInt(prompt(`Enter the element number ${index + 1}`));
        if(arr[index] > 6) console.log(arr[index]);
    }
}
{
    console.log("Problem 6");
    let num = parseInt(prompt("Enter a number"))
    if (num > 0 ) console.log("Positive");
    else if (num < 0 ) console.log("Negative");
    else console.log("Zero");
}
{
    console.log("Problem 7");
    console.log("JS", Number("js"));
    console.log("15", Number("15"));
    console.log("8.5", Number("8.5"));
    console.log("true", Number(true));
    console.log("false", Number(false));
    console.log("null", Number(null));
}
{
    console.log("Problem 8");
    let str3 = prompt("Enter a sentence")
    str3.includes("JavaScript") ? console.log("Found") : console.log("Not Found");

}
{
    console.log("Problem 9");
    let name = prompt("Enter the first name")
    let name2 = prompt("Enter the second name")
    let name3 = prompt("Enter the third name")
    console.log(name);
    console.log(name2);
    console.log(name3);
}
{
    console.log("Problem 10");
    console.log(parseInt(Math.random() * 10) + 1);
}
{
    console.log("Problem 11");
    let arr = []
    for (let index = 0; index < 5; index++) {
        arr[index] = parseInt(prompt(`Enter the age number ${index + 1}`));
        if(arr[index] >= 18) console.log(arr[index]);
    }

}
{
    console.log("Problem 12");
    let str = prompt("Enter a string")
    console.log(str.length);
}
{
    console.log("Problem 13");
    let arr = []
    for (let index = 0; index < 4; index++) {
        arr[index] = Number(prompt(`Enter the element number ${index + 1}`));
        console.log(arr[index] >= 8 ? "Pass" : "Fail");    
    }
}
{
    console.log("Problem 14");
    for (let i = 1; i <= 30; i++) {
        if(i % 2 === 0) console.log(i)
    }
}
{
    console.log("Problem 15");
    let num = prompt("Enter number")
    if(num % 2 === 0) console.log("Even");
    else console.log("Odd")
}
{
    console.log("Problem 16");
    let arr = []
    for (let index = 0; index < 5; index++) {
        arr[index] = Number(prompt(`Enter the element number ${index + 1}`));
    }
    console.log("The maximum number", Math.max(...arr));
    console.log("The mainimum number", Math.min(...arr));
}
{
    console.log("Problem 17");
    let str = prompt("Enter s sentence")
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
{
    console.log("Problem 18");
    for (let i = 10; i > 0; i--) {
        console.log(i);   
    }
}
{
    console.log("Problem 19");
    let arr = [];
    let sum = 0;
    for (let index = 0; index < 5; index++) {
        arr[index] = parseInt(prompt(`Enter the element number ${index + 1}`));
        sum += ar7[index]
    }
    console.log("The sum is", sum);
}
{
    console.log("Problem 20");
    let str = prompt("Enter a string")
    console.log(str.startsWith("J")? "Yes": "No");
}
{
    console.log("Problem 21");
    console.log(parseInt(Math.random() * 6) + 1);
}
{
    console.log("Problem 22");
    let arr = []
    let arr2 = []
     for (let index = 0; index < 5; index++) {
        arr[index] = parseInt(prompt(`Enter the element number ${index + 1}`));
        arr2[index] = arr[index] * 2
    }
    console.log(arr2);
}
{
    console.log("Problem 23");
    let str = prompt("Enter a string")
    for (let i = 0; i < str.length; i++) console.log(str[i]);
}
{
    console.log("Problem 24");
    let num = parseInt(prompt("Enter a number"))
    console.log(num % 3 === 0 && num % 5 === 0? "Yes":"No");
}
{
    console.log("Problem 25");
    let str = prompt("Enter string with spaces")
    arr = str.split(" ")
    let str2 = '';
    for (let i = 0; i < arr.length; i++) {
        str2 += arr[i];
    }
    console.log(str2)
}
{
    console.log("Problem 26");
    let cnt = 0;
     for (let index = 0; index < 5; index++) {
        let num = parseInt(prompt(`Enter the element number ${index + 1}`));
        if (num > 10) cnt++;
    }
    console.log("Number of values more than 10 is", cnt);
}
{
    console.log("Problem 27");
    while(true){
        let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        if(num === 7) break;
    }

}
{
    console.log("Problem 28");
    let str = prompt("Enter a string")
    str = str.replace("JS", "JavaScript")
    console.log(str);
}
{
    console.log("Problem 29");
    let str = prompt("Enter a string")
    console.log(str.indexOf('a'));
}
{
    console.log("Problem 30");
    for (let index = 0; index < 5; index++) {
        let element = prompt(`Enter the element number ${index + 1}`);
        if(!isNaN(element) && element.trim() !== ""){
            element = Number(element)
        }
        if(typeof element === "string") console.log(element);
    }
}
{
    console.log("Problem 31");
    function fibonacci(n){
        if(n <= 0) return []
        if(n === 1) return [0];
        let fib = [0, 1];
        for(let i = 2; i < n; i++){
            fib.push(fib[i - 1] + fib[i - 2])
        }
        return fib;
    }
    console.log(fibonacci(4));
    console.log(fibonacci(9));
}
{
    console.log("Problem 32 (Problem 2)");
    let arr = [1, 2, 3, 4, 5]
    let revArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        revArr.push(arr[i])
    }
    console.log(revArr);
}
{
    console.log("Problem 33 (Problem 3)");
    function dailyTemp(temps){
        const res = new Array(temps.length).fill(0)
        const stack = []
        for(let i = 0; i <temps.length; i++){
            while(stack.length && temps[i] > temps[stack[stack.length - 1]]){
                const prevIndex = stack.pop();
                res[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return res;
    }
    console.log(dailyTemp([73,74,75,71, 69, 72, 76, 73]));
    console.log(dailyTemp([30, 40, 50, 60]));
}
{
    console.log("Problem 34 (Problem 4)");
    function checkCase(str){
        let allLower = true;
        let allUpper = true;
        for(let i = 0; i < str.length; i++){
            if(str[i] !== str[i].toLowerCase())
                allLower = false
            else if (str[i] !== str.toUpperCase())
                allUpper = false
        }
        console.log(allUpper || allLower ? "true": "false");
    }
    checkCase("hello")
    checkCase("Hello")
    checkCase("HELLO")
}
{
    console.log("Problem 35 (Problem 5)");
    function getGreaterLength(str, str2){
        if(str.length > str2.length) return str.length;
        else return str2.length;
    }
    console.log(getGreaterLength("Ahmed", "Mohammed"));
    console.log(getGreaterLength("Khalid", "Asma"));
    
}