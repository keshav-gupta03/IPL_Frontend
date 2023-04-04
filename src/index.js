import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TeamPage from "./page/TeamPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/teams/:teamName" element={<TeamPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
