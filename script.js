
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task.name}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="completeTask(${index})">Done</button>
        `;

        list.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        name: input.value,
        done: false
    });

    input.value = "";
    displayTasks();
}
// Edit task
function editTask(index) {

    let newTask = prompt("Edit task", tasks[index].name);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].name = newTask.trim();
        displayTasks();
    }

}

// Delete task
function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}

// Mark task as completed
function completeTask(index) {

    tasks[index].done = !tasks[index].done;

    displayTasks();
}

// Display saved tasks
displayTasks();
