const delay = (num, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, time);
  });
};
const run = async () => {
    for (let i = 1; i <= 4; i++) {
        await delay(i, 1000)        
    }
}
run();
