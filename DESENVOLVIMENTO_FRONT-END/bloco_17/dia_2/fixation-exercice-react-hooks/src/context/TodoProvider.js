import React, { useState } from 'react' // Chamamos o useState que é um hook que usamos para simplificar o uso do state
import TodoContext from './TodoContext'

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]) // Agora nao usamos mais o costrutoir, this nem nada do tipo, essa é a sintaxe.
  // O use state retorna um array que a primeira chave é o state que vamos usar, e a segunda é uma função que atualiza o state.
  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo)) // Aqui vemos o state sendo atualizado pelo setTodos
  }

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}> {/* Aqui passamos o provider com o objetos que queremos que sejam compartilhados atravéz do value */}
        {children} {/* E setamos o children para esse provider ser genérico e podermos usar em qqr lugar */}
      </TodoContext.Provider>
    </main>
  );
}

export default TodoProvider;
