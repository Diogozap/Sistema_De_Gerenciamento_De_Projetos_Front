// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPAge";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProjectPage from "./pages/ProjectPage"; // Página para listar os projetos

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/projetos" element={<ProjectPage />} /> {/* Página de projetos */}
      </Routes>
    </Router>
  );
};

export default App;

