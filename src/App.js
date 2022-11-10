import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import { ConsultantList } from "./Components/ConsultantList";
import { AddConsultant } from "./Components/AddConsultant";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          Consultant
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add/"} className="nav-link">
              Add a consultant
            </Link>
          </li>
        </div>
      </nav>

      <div className="container m-10">
        <Routes>
          <Route path="/" element={< ConsultantList />} />
          <Route path="/add" element={ < AddConsultant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;