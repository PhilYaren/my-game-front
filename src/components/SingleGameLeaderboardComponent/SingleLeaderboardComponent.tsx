/* eslint-disable react/prop-types */
import React from "react";
import SingleLeaderboardUserRow from "../SingleLeaderboardUserRow/SingleLeaderboardUserRow";

export default function SingleLeaderboardComponent({gameset}): JSX.Element {
  return (
    <div>
      <h4>{gameset.name}</h4>
      <ol>
        {gameset.statistics.map((singleStat) => (
          <SingleLeaderboardUserRow key={singleStat.id} userName={singleStat.user.userName} score={singleStat.score} time={singleStat.createdAt
          } />
        ))}
      </ol>
    </div>
  );
}
