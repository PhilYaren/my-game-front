import React from "react";
import SingleLeaderboardComponent from "../SingleGameLeaderboardComponent/SingleLeaderboardComponent";

export default function LeaderboardPage(): JSX.Element {
    const leaderboardArr = []
  return (
    <div>
      <h2>LeaderboardPage</h2>
      {leaderboardArr.map((singleGameset) => (
        <SingleLeaderboardComponent gameset={singleGameset} />
      ))}
    </div>
  );
}
