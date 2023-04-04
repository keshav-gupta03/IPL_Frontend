import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchDetailCard from "../component/MatchDetailCard";
import MatchSmallCard from "../component/MatchSmallCard";
import IplService from "../service/IplService";
import { useParams } from "react-router";
function TeamPage() {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    async function fetchData() {
      await IplService.getTeamDetails(teamName)
        .then(async (res) => {
          setTeam(await res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [teamName]);

  if (!team || !team.teamName) {
    return (
      <div>
        <h1>Team not found </h1>
      </div>
    );
  }

  return (
    <div className="teamPage">
      <h1>Team Name : {team.teamName} </h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
    </div>
  );
}
export default TeamPage;
