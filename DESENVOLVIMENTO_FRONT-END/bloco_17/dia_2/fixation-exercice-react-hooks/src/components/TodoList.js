import React, { useContext } from 'react'; // chamamos o useContex que é um hook que usamos para simplificar o uso do Context
import TodoContext from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext) // passamos o context para o nosso hook e desestruturando temos acesso ao state global sem precisar do consumer

  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

export default TodoList;