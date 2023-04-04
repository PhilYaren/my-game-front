import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/user.selector";
import SingleStatisticsComponent from "../SingleStatisticsComponent/SingleStatisticsComponent";

export default function StatisticsPage(): JSX.Element {
  const user = useSelector(getUser);
  const [userStatisticsObj, setUserStat] = useState({});
  // let userStatisticsArr

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/statistics/user",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const userStat = await response.json();
        console.log("dhdakaidiaidaidaidiadiadiadi", userStat);
        setUserStat(userStat);
        // userStatisticsArr = userStatisticsObj.statistics
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  console.log("object of stat in state", userStatisticsObj);
  console.log("statisticsArr", userStatisticsObj.statistics);
  return (
    <div>
      <h2>{user.userName}</h2>
      <ul>
        {Object.keys(userStatisticsObj).length &&
          userStatisticsObj.statistics.map((singleStat) => (
            <SingleStatisticsComponent
              key={singleStat.id}
              name={singleStat.game.name}
              score={singleStat.score}
              date={singleStat.createdAt}
            />
          ))}
      </ul>
    </div>
  );
}
