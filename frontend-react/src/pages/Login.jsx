import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);

    try {
      const response = await fetch("http://localhost:3001/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await response.json();

      if (response.ok) {

        //como não precisa de jWT/sessão, só mudamos de página.

        navigate("/dashboard");
      } else {
        setErro(dados.erro || "Acesso negado");
      }
    } catch (err) {
      setErro("Servidor offline. Verifique o backend!");
    }
  }

  return (
    <section className="card" style={{ maxWidth: 400, margin: "2rem auto", padding: "2rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: ".75rem" }}>
        <input 
          className="input" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="input" 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <button className="btn" type="submit">Entrar</button>
      </form>
    </section>
  );
}