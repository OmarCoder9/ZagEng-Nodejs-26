const students = [];

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const gradeInput = document.getElementById("grade");
    const addBtn = document.getElementById("addBtn");
    const studentList = document.getElementById("studentList");

    addBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const age = ageInput.value.trim();
      const grade = gradeInput.value.trim();

      if (!name || !age || !grade) return;

      const student = {
        name,
        age,
        grade
      };

      students.push(student);

      updateStudents();

      nameInput.value = "";
      ageInput.value = "";
      gradeInput.value = "";
    });

    function updateStudents() {
      studentList.innerHTML = "";

      students.forEach((student, index) => {
        const li = document.createElement("li");
        li.textContent = `${student.name} - Age: ${student.age}, Grade: ${student.grade} `;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {
          students.splice(index, 1);
          updateStudents();
        });

        li.appendChild(removeBtn);
        studentList.appendChild(li);
      });
    }