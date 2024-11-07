// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";  // Certifique-se de importar o CSS correto

// Simulação de emails já cadastrados
const existingEmails = ["test@example.com", "user@domain.com"];

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Mensagens de erro
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Limpa qualquer erro anterior

    // Validação do email
    if (!email) {
      setError("O campo de email não pode estar vazio.");
      return;
    }

    // Verificação de email duplicado
    if (existingEmails.includes(email)) {
      setError("Este email já está cadastrado.");
      return;
    }

    // Verificação das senhas
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    // Simula o envio do formulário
    setTimeout(() => {
      setLoading(false);
      // Aqui você faria a lógica de cadastro (ex: chamar uma API)
      console.log("Usuário cadastrado com sucesso!");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h1 className="project-name">Wouta</h1>

      <div className="register-header">Crie sua conta</div>
      <div className="register-description">Preencha os campos abaixo para se cadastrar</div>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Cadastrar"}
        </button>
      </form>

      <div className="login-link">
        <p>Já tem uma conta?</p>
        <Link to="/login">Entrar</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
