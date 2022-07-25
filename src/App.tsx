import './App.css'

import AddTodoForm from './components/AddTodoForm'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Images from './components/Images'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function AnotherList () {
  return (
    <ul>
      {numbers.map(function (number) {
        return <li>{number}</li>
      })}

      {/* {numbers.map(number => (
        <li>{number}</li>
      ))} */}
    </ul>
  )
}

function App () {
  return (
    <div className='App'>
      <Header />
      <AddTodoForm />
      <TodoList />
      <Images />

      <AnotherList />
    </div>
  )
}

export default App
