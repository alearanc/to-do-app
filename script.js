function addTask() {
    let $input = document.getElementById('task-input')
    let taskText = $input.value
    if (taskText === '') {
        alert('The task is empty!')
        return
    }
    createTask(taskText)
    $input.value = ''
}
function createTask(taskText) {
    let $pendingTasks = document.getElementById('pending-tasks')
    let $li = document.createElement('li')

    $li.appendChild(document.createTextNode(taskText))

    createDoneOption($li)
    createDeleteOption($li)
    
    $pendingTasks.appendChild($li)
}
function createButton(text, action) {
    let $button = document.createElement("button")
    $button.textContent = text
    $button.addEventListener("click", action)
    return $button
}
function createDoneOption($li) {
    $li.appendChild(createButton('Done', () => {
        doneTask($li)
    }))
}
function createDeleteOption($li) {
    $li.appendChild(createButton('Delete', () => {
        removeTask($li)
    }))
}
function createUndoOption($li) {
    $li.appendChild(createButton('Undo', () => {
        undoneTask($li)
    }))
}
function doneTask($li) {
    let $doneTasks = document.getElementById('done-tasks')
    let $buttons = $li.querySelectorAll("button")
    $buttons.forEach(button => button.remove())
    $li.appendChild(createButton('Undo', () => {
        undoneTask($li)
    }))
    $li.appendChild(createButton('Delete', () => {
        removeTask($li)
    }))
    $doneTasks.appendChild($li)
}
function removeTask(taskElement) {
    taskElement.remove()
}
function undoneTask($li) {
    let $buttons = $li.querySelectorAll("button")
    $buttons.forEach(button => button.remove())
    $li.appendChild(createButton('Done', () => {
        doneTask($li)
    }))
    $li.appendChild(createButton('Delete', () => {
        removeTask($li)
    }))
    let $pendingTasks = document.getElementById("pending-tasks")
    $pendingTasks.appendChild($li)
}
const $submitButton = document.getElementById('submit-button')
$submitButton.addEventListener('click', addTask)
