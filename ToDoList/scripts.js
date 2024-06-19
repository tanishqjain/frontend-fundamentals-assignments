
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    newTaskInput.value = "";
    newTaskInput.focus();
  }

  // Event listener for the add button
  addTaskBtn.addEventListener("click", addTask);

  // Event listener for the Enter key in the input field
  newTaskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
