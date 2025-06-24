const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;


  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }


  const li = document.createElement("li");

  const content = document.createElement("div");
  content.className = "task-content";

  const task = document.createElement("span");
  task.textContent = taskText;

  const time = document.createElement("small");
  time.textContent = taskTime ? `🕒 ${taskTime}` : "";

  content.appendChild(task);
  content.appendChild(time);

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";


  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    task.classList.toggle("completed");
    time.classList.toggle("completed");
  };


  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", task.textContent);
    if (newText !== null && newText.trim() !== "") {
      task.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttons.appendChild(completeBtn);
  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(content);
  li.appendChild(buttons);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
});
