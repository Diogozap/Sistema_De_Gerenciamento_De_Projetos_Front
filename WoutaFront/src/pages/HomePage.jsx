// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Arquivo CSS para o estilo da página Home

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bem-vindo ao Wouta!</h1>
        <p>Aqui você pode gerenciar seus projetos e tarefas de forma eficiente.</p>
      </div>
      <div className="home-actions">
        <Link to="https://www.youtube.com/watch?v=IrqVZuO6v1E&pp=ygUTaW50cm8gdmVub20gZXh0cmVtZQ%3D%3D" target="blank" className="button login-button">Equipes</Link>
        <Link to="/projetos" className="button">Projetos</Link>
      </div>
    </div>
  );
};

export default HomePage;


