// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de login direto para HomePage
    setTimeout(() => {
      navigate("/home"); // Redireciona para a HomePage
      setLoading(false);
    }, 1000); // Atraso de 1 segundo para simular carregamento
  };

  return (
    <div className="login-container">
      <h1 className="project-name">Wouta</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>

      <div className="register-link">
        <p>
          Ainda não tem uma conta? <Link to="/register">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
