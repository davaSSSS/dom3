let textIn = document.querySelector('.textIn');
let addBtn = document.getElementById('addBtn');
let list = document.querySelector('ul');

let todosArray = localStorage.getItem('todos') === null
? []
: [...JSON.parse(localStorage.getItem('todos'))]

const addTodo = () => {
    let newTask = textIn.value
    //console.log(newTask)
    //console.log('test')
    if(newTask != ''){
        todosArray.push({
            text: newTask,
            checked: false
        })
        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderTodoItem()
        textIn.value = ''
    }
}

const deleteTodo = (e) => {
    e.currentTarget.parentNode.remove(e.parentNode)

}

const completeTodo = (e) => {
    let isDone = e.currentTarget.parentNode.classList.contains('done')

    isDone
    ? e.currentTarget.parentNode.classList.remove('done')
    : e.currentTarget.parentNode.classList.add('done')
}
addBtn.addEventListener('click', addTodo)

    const renderTodoItem = () => {
        list.innerHTML = ''
        todosArray.map((todo) => {
        let li = document.createElement('li')
        li.className = 'taskItem'

        let doneBtn = document.createElement('img')
        doneBtn.src = 'done.png'
        doneBtn.className = 'btn'
        doneBtn.addEventListener('click', completeTodo)

        let deleteBtn = document.createElement('img')
        deleteBtn.src = 'delete.png'
        deleteBtn.className = 'btn'
        deleteBtn.addEventListener('click', deleteTodo)

        li.append(todo.text)
        li.append(doneBtn)
        li.append(deleteBtn)
        list.prepend(li)

        })
    }
    renderTodoItem()
