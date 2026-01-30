const addPassedProperty = (students) => {
    students.map((el)=>{
        el.passed = el.score >= 50 ? true : false;
    })
};
const students = [
  {
    name: "Ahmed",
    score: 80,
  },
  {
    name: "Sara",
    score: 40,
  },
];
addPassedProperty(students)
console.log(students);
