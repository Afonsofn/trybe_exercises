import React, { useContext } from 'react'; // Chamamos o Hook useContex para recuperar os valores do context.

import QuestionsContext from '../context/QuestionsContext'; // Chamamos o context para passar para o useContext.
import QuestionCard from './QuestionCard'; //  E chamamos o card de perguntas para fazer um map nele com as informações do state global.

function QuestionList() {
  const { questions } = useContext(QuestionsContext); // recuperamos as perguntas.
  return (
    <section>
      {
        questions
          .map((question, index) => <QuestionCard key={ index } question={ question } />) // E fazemos um map nas question para renderizar todas nos cards.
      }
    </section>
  );
}

export default QuestionList;
