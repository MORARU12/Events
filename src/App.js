import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import Registration from "./pages/register/Register";
import Header from "./components/Header";
import Client from "./pages/client/Client";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/client/:id" element={<Client />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
