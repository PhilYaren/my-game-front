import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/user.selector";
import SingleStatisticsComponent from "../SingleStatisticsComponent/SingleStatisticsComponent";

export default function StatisticsPage(): JSX.Element {
  const user = useSelector(getUser);
  const userStatisticsArr = [
    {
      id: 1,
      gameId: 3,
      score: 5600,
      userId: 2,
      gameName: "kekekekeke",
      createdAt: new Date(),
    },
    {
      id: 1,
      gameId: 3,
      score: 5600,
      userId: 2,
      gameName: "kekekekeke",
      createdAt: new Date(),
    },
    {
      id: 1,
      gameId: 3,
      score: 5600,
      userId: 2,
      gameName: "kekekekeke",
      createdAt: new Date(),
    },
  ];
  return (
    <div>
      <h2>{user.userName}</h2>
      <ul>
        {userStatisticsArr.map((singleStat) => (
          <SingleStatisticsComponent
            key={singleStat.id}
            name={singleStat.gameName}
            score={singleStat.score}
            date={singleStat.createdAt}
          />
        ))}
      </ul>
    </div>
  );
}
