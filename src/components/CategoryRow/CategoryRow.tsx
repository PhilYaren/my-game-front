/* eslint-disable react/prop-types */
import React from "react";
import SingleQuestionField from "../SingleQuestionField/SingleQuestionField";

export default function CategoryRow({ name, questions }): JSX.Element {
  return (
    <tr>
      <th scope="row">{name}</th>
      {questions.map((question) => (
        <SingleQuestionField key={question.id} score={question.score} text={question.text} answer={question.answer} name={name} />
      ))}
    </tr>
  );
}
