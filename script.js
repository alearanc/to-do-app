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

function createDoneOption($li) {
    let $doneButton = document.createElement('button')
    $doneButton.textContent = 'Done'
    $doneButton.addEventListener('click', () => {
        doneTask($li)
    })
    $li.appendChild($doneButton)
}

function createDeleteOption($li) {
    let $deleteButton = document.createElement('button')
    $deleteButton.textContent = 'Delete'
    $deleteButton.addEventListener('click', () => {
        removeTask($li)
    })
    $li.appendChild($deleteButton)
}

function createUndoOption($li) {
    let $undoneButton = document.createElement('button')
    $undoneButton.textContent = 'Undo'
    $undoneButton.addEventListener('click', () => {
        undoneTask($li)
    })
    $li.appendChild($undoneButton)
}

function doneTask($li) {
    let $doneTasks = document.getElementById('done-tasks')
    
    let $buttons = $li.querySelectorAll("button")
    $buttons.forEach(button => button.remove())
    
    createUndoOption($li)
    createDeleteOption($li)

    $doneTasks.appendChild($li)
}

function removeTask(taskElement) {
    taskElement.remove()
}

function undoneTask($li) {
    let $buttons = $li.querySelectorAll("button")
    $buttons.forEach(button => button.remove())

    createDoneOption($li)
    createDeleteOption($li)

    let $pendingTasks = document.getElementById("pending-tasks")
    $pendingTasks.appendChild($li)
}

const $submitButton = document.getElementById('submit-button')
$submitButton.addEventListener('click', addTask)
