import { useState } from 'react'
import Todo from './components/todo'
import TodoForm from './components/TodoForm'
import "./App.css"
import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer todos os exercicios da academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Revisar Matéria da facul",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar React 1 hora",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Terminar o projeto e commitar",
      category: "Trabalho",
      isCompleted: false,
    },
  ])


const [search, setSearch] = useState("")
  

  const addTodo = (text, category) => {
      const newTodos = [...todos, {
      id: Math.floor(Math.ramdom() * 10000),
      text,
      category,
      isCompleted: false,
      }
    ]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null
      )
      setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }



  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}  completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}   />
    </div>
  )
}

export default App
