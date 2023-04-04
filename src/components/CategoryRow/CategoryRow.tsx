/* eslint-disable react/prop-types */
import React from "react";
import SingleQuestionField from "../SingleQuestionField/SingleQuestionField";
import './table.css'

export default function CategoryRow({
  name,
  questions,
  setScore,
}): JSX.Element {
  console.log(questions);
  return (
    <tr>
      <th id="rowTable" scope="row">{name}</th>
      {questions.map((question) => (
        <SingleQuestionField
          key={question.id}
          score={question.score}
          text={question.text}
          answer={question.answer}
          name={name}
          questionId={question.id}
          isAnswered={question.answeredQuestions}
          setScore={setScore}
        />
      ))}
    </tr>
  );
}
