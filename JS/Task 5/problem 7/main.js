let jsonData = `[]`;
let data = JSON.parse(jsonData);
let newOject = {
    id: 1,
    title: "How to parse and stringfy JSON"
};
data.push(newOject);
jsonData = JSON.stringify(data);
console.log(jsonData);
