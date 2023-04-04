import React from "react";
import { Link } from "react-router-dom";
function MatchDetailCard(props) {
  const otherTeam =
    props.match.team1 === props.teamName
      ? props.match.team2
      : props.match.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;

  if (!props.match) return null;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Match </h3>
      <h4>Match detail</h4>
      <h1>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
      <h2>{props.match.date}</h2>
      <h3>{props.match.venue}</h3>
      <h3>
        {props.match.matchWinner} won by {props.match.resultMargin}{" "}
        {props.match.result}
      </h3>
    </div>
  );
}
export default MatchDetailCard;
