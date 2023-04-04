import React from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { useState } from "react";
import IplService from "../service/IplService";

function MatchPage() {
  const [matches, setMatches] = useState({});
//   useEffect(() => {
//     IplService.getAllMatches()
//       .then((res) => {
//         setMatches(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  console.log(matches)
  return (
    <div className="matchPage">
        
      <h1>this  is Match Page</h1>
    </div>
  );
}
export default MatchPage;
