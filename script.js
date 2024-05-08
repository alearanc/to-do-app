function addTask() {
    let $input = document.getElementById("task-input")
    let task = $input.value
    if (task === "") {
        alert("The task is empty!")
        return
    }
    let $pendingTasks = document.getElementById("pending-tasks")
    let $li = document.createElement("li")
    $li.appendChild(document.createTextNode(task))
    let $doneButton = document.createElement("button")
    $doneButton.textContent = "Done"
    $doneButton.addEventListener("click", () => {
        doneTask($li)
    })
    $li.appendChild($doneButton)
    let $deleteButton = document.createElement("button")
    $deleteButton.textContent = "Delete"
    $deleteButton.addEventListener("click", () => {
        removeTask($li)
    })
    $li.appendChild($deleteButton)
    $pendingTasks.appendChild($li)
    $input.value = ""
}

function doneTask(taskElement) {
    let $doneTasks = document.getElementById("done-tasks")
    let $undoneButton = document.createElement("button")
    $undoneButton.textContent = "Undone"
    $undoneButton.addEventListener("click", () => {
        undoneTask($li)
    })
    let $doneButton = taskElement.querySelector("button")
    if ($doneButton && $doneButton.textContent === "Done")
        taskElement.removeChild($doneButton)
    $doneTasks.appendChild(taskElement)
}

function removeTask(taskElement) {
    taskElement.remove()
}

function undoneTask(taskElement) {

}

const $submitButton = document.getElementById("submit-button")
$submitButton.addEventListener("click", addTask)
