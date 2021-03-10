import React, { useState, useContext } from 'react' // Aqui chamamos os dois hook .
import TodoContext from '../context/TodoContext';

function TodoInput() {
  const [newTodo, setNewTodo] = useState('') // Nessa linhas setamos o nosso state e a função pra atualiza-lo.
  const { addTodo } = useContext(TodoContext) // Nessa linha pegamos dados vindos do state atraves do useContext.

  const handleChange = ({ target }) => {
    setNewTodo(target.value) // Atualizando o state.
  }

  const handleClick = () => {
    addTodo(newTodo); // Passando o novo todo para o state global atravez da função que trouxemos através do hook useContext.
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="newTodo">
        Insira uma Tarefa:
        <input
        value={newTodo}
        onChange={handleChange}
        type="text"
        name="newTodo"
        id="newTodo"
        />
      </label>
      <button onClick={handleClick}>
        Adcionar tarefa
      </button>
    </section>
  )
}

export default TodoInput;
