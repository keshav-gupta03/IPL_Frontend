import logo from "./logo.svg";
import "./App.css";
import TeamPage from "./page/TeamPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router >
        <Route path="/teams/:teamName">
          <TeamPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;