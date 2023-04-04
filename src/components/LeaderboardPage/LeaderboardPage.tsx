import React, { useEffect, useState } from "react";
import SingleLeaderboardComponent from "../SingleGameLeaderboardComponent/SingleLeaderboardComponent";

export default function LeaderboardPage(): JSX.Element {
  const [leaderboardArr, setLeaderboard] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/statistics", {
          method: "GET",
          credentials: "include",
        });
        const leaderboard = await response.json();
        setLeaderboard(leaderboard);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
}, []);

return (
    <div>
      <h2>LeaderboardPage</h2>
      {leaderboardArr.map((singleGameset) => (
        <SingleLeaderboardComponent
          key={singleGameset.createdAt}
          gameset={singleGameset}
        />
      ))}
    </div>
  );
}
