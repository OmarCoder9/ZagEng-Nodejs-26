let students = [];

  function renderStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
      list.appendChild(li);
    });
  }

  function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    if (!name || !age || !grade) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name: name,
      age: Number(age),
      grade: grade
    };

    students.push(student);

    renderStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
  }

  function saveJSON() {
    const jsonString = JSON.stringify(students);
    document.getElementById("jsonArea").value = jsonString;

    console.log(jsonString);
  }

  function loadJSON() {
    const jsonString = document.getElementById("jsonArea").value;

    try {
      students = JSON.parse(jsonString);
      renderStudents();
    } catch (error) {
      alert("Invalid JSON!");
    }
  }