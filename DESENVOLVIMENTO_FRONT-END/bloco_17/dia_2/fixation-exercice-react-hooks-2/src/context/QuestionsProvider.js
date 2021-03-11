import React, { useState } from 'react'; // Importamos o hook useState.

import QuestionsContext from './QuestionsContext'; // Chamamos o context
import { getQuestions, createQuestion as createQuestionService } from '../services/api'; // Chamamos a API.

function QuestionsProvider({ children }) { // Das props desestruturamos o children.
  // isLoading
  // questions
  // getQuestions
  // createQuestion

  const [isLoading, setIsLoading] = useState(false); // Setamos dois states.
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => { // Fazemos a função do fetch pra chamar a API.
    setIsLoading(true);
    const questionsFromApi = await getQuestions();
    setQuestions(questionsFromApi);
    setIsLoading(false);
  };

  const createQuestion = async (newQuestion) => { // Criamos a função que seta as novas questões no state global.
    setIsLoading(true);
    await createQuestionService(newQuestion);
    setQuestions([...questions, newQuestion]);
    setIsLoading(false);
  };

  return (
    <QuestionsContext.Provider
      value={ { isLoading, questions, fetchQuestions, createQuestion } } // Passamos tudo pra o value do provider
    >
      {children} {/* E setamos o children pra ser um provider genérico. */}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
