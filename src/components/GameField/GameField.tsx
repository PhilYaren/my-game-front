import React from "react";
import CategoryRow from "../CategoryRow/CategoryRow";

export default function GameField(): JSX.Element {
  const categoriesArr: any = [
    {
      id: 1,
      name: "dadad",
      questions: [
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
      ],
    },
    {
      id: 1,
      name: "dadad",
      questions: [
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
      ],
    },
    {
      id: 1,
      name: "dadad",
      questions: [
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
        { id: 2, score: 200 },
      ],
    },
  ];
  return (
    <table className="table table-bordered border-primary">
      <tbody>
        {categoriesArr.map((category: any) => (
          <CategoryRow
            key={category.id}
            name={category.name}
            questions={category.questions}
          />
        ))}
      </tbody>
    </table>
  );
}
