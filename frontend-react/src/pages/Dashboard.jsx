import { Link } from "react-router-dom";

export default function Dashboard() {

  return (
    <section className="card" style={{ padding: "2rem" }}>
    
      <h1> Olá, Chef!</h1>
      
      <p style={{ marginTop: ".5rem", maxWidth: "600px", lineHeight: "1.6" }}>
        Seja bem-vindo à sua área exclusiva no <strong>Sistema de receitas</strong>. 
        Aqui você pode gerenciar suas receitas e organizar seus ingredientes e modo de preparo!.
      </p>

    
      <div style={{ marginTop: "2rem", display: "flex", gap: ".5rem" }}>
        <Link to="/receitas" className="btn">Ver receitas</Link>
        <Link to="/" className="btn btn-outline">Voltar à página inicial</Link>
      </div>
    </section>
  );
}