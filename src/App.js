import logo from "./logo.svg";
import "./App.css";
// import TeamPage from "./page/TeamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchPage from "./page/MatchPage";
import TeamPage from "./page/TeamPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage/>}></Route>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
