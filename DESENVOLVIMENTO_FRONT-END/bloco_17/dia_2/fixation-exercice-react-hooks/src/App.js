import React from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoProvider from './context/TodoProvider' 


function App() {
  return (
    <main>
      <TodoProvider> {/* Passamos o provider encapsulando os componentes que vão ter acesso ao state. */}
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  );
}

export default App;
