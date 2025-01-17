document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskList = document.querySelector('form')
  taskList.addEventListener('submit', (e) =>{
    e.preventDefault()
    handleToDo(document.querySelector('#new_task').value)
    taskList.reset()
  })
});

function handleToDo(todo){
  let li = document.createElement('li')
  li.textContent = todo
  let delButt = document.createElement('button')
  delButt.textContent = 'x '
  li.appendChild(delButt)
  document.querySelector('#tasks').appendChild(li) 
  delButt.addEventListener('click', handleDelete)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
