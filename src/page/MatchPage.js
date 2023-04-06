import React from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { useState } from "react";
import IplService from "../service/IplService";
import { useParams } from "react-router";

import MatchDetailCard from "../component/MatchDetailCard";
function MatchPage() {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    async function fetchData() {
      await IplService.getAllMatchesForTeamBetweenDate(teamName, year)
        .then((res) => {
          setMatches(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [teamName]);

  return (
    <div className="matchPage">
      <h1>this is Match Page</h1>
      {
        console.log("this is Match Page")
      }

      {matches.map((match) => (
        <MatchDetailCard key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
}

export default MatchPage;
