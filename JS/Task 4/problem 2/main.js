const tasks = [];

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const task = {
        text: taskText,
        completed: false
      };

      tasks.push(task);
      renderTasks();

      taskInput.value = "";
    });

    function renderTasks() {
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
          li.classList.add("completed");
        }

        li.addEventListener("click", () => {
          task.completed = !task.completed;
          renderTasks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {
          tasks.splice(index, 1);
          renderTasks();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
      });
    }