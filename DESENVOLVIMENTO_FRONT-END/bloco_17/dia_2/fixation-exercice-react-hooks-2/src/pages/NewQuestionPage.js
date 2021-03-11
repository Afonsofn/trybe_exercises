import React, { useContext, useState } from 'react';
import QuestionsContext from '../context/QuestionsContext'; // Chamamos o context

function NewQuestionPage({ history }) { // Desestruturamos a props para pegar o history
  const { createQuestion } = useContext(QuestionsContext); // Com o hook useContent resgatamos a função createQuestion do estado global.

  const [formData, setFormData] = useState({ // Com o use state setamos o formData como objeto com duas keys
    name: '',
    question: '',
  });

  const handleChange = ({ target }) => { // Fazemos a função que atualiza o stado
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  async function onSubmit(ev) { // Fazemos a função assincrona para criar uma nova question
    ev.preventDefault();
    await createQuestion({ question: formData.question, user: formData.name });
    history.push('/');
  }
// Aqui é basico escreve valores no forms, é passado pro state local, e o state é passado pro state global.
  return (
    <section className="question-section">
      <form onSubmit={ onSubmit }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            value={ formData.question }
            onChange={ handleChange }
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            value={ formData.name }
            onChange={ handleChange }
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
