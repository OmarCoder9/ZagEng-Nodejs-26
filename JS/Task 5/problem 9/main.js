const checkNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0) resolve("Positive");
    else if (num === 0) resolve("Zero");
    else reject("Negative");
  });
};
// .then() & .catch()
checkNum(-1)
  .then((result) => console.log(result))
  .catch((error) => {
    (console.log("Error:", error));
  });
// rewrite as async/await
const testNum = async (num)=>{
    try{
        const result = await checkNum(num)
        console.log(result);
    }catch(error){
        console.log("Error:", error);
    }
}
testNum(-1)