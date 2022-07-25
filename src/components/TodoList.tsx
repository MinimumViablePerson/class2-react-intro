const todos = [
  {
    title: 'Buy milk',
    completed: true
  },
  {
    title: 'Cook dinner',
    completed: false
  },
  {
    title: 'Learn React',
    completed: false
  },
  {
    title: 'Conquer the World',
    completed: true
  },
  {
    title: 'Nice!',
    completed: false
  }
]

function TodoList () {
  // let ulEl = document.createElement('ul')

  // for (let todo of todos) {
  //   let liEl = document.createElement('li')
  //   liEl.textContent = todo.title
  //   if (todo.completed) liEl.className = 'completed-todo'
  //   else liEl.className = 'todo'
  //   ulEl.append(liEl)
  // }


  return (
    <ul>
      {todos.map(todo => (
        <li className={todo.completed ? 'completed-todo' : 'todo'}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
