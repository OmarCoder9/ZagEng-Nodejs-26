// it prints undefined because js doesn't wait for the setTimeout function to run it goes into getData it sees that setTimout will return after 1 second and js ends the function getData immediately
{
  // solution 1 using callback

  function getData(callback) {
    setTimeout(() => {
      callback("Data Loaded");
    }, 1000);
  }
  getData((data) => {
    console.log(data);
  });
}
{
  // solution 2 using promises

  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data Loaded");
      }, 1000);
    });
  }
  getData().then((data) => console.log(data));
}
{
  // solution 3 using async/ await
  function getData() {
    return new Promise((res) => {
      setTimeout(() => {
        res("Data Loaded");
      }, 1000);
    });
  }
  async function load() {
    const data = await getData();
    console.log(data);
  }
  load();
}
