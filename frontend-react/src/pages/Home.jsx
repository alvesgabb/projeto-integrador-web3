import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="card" style={{ padding: "2rem", minHeight: "80vh" }}>
      
      {/* Cabeçalho Principal */}
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
         Sistema de Receitas
      </h1>
      <p style={{ marginTop: "0.5rem", color: "var(--text-muted)" }}>
        Organize suas criações culinárias de forma prática e rápida.
      </p>

      {/* Botões Rápidos */}
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
        <Link to="/receitas" className="btn">Ver Receitas</Link>
        <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
          Meu Painel
        </button>
      </div>

      {/* Grid de Funcionalidades  */}
      <div style={{ 
        marginTop: "3rem", 
        display: "grid", 
        gap: "1rem", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" 
      }}>
        <div className="card">
          <h3> Catálogo</h3>
          <p>Acesse todas as suas receitas em um só lugar.</p>
        </div>

        <div className="card">
          <h3> Cadastro</h3>
          <p>Adicione novos pratos e ingredientes facilmente.</p>
        </div>

        <div className="card">
          <h3> Gestão</h3>
          <p>Controle suas informações no dashboard exclusivo.</p>
        </div>
      </div>


      {/* Rodapé da Página (Call to Action) */}
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <hr style={{ marginBottom: "2rem", opacity: "0.1" }} />
        <h3>Pronto para começar a cozinhar?</h3>
        <button className="btn" style={{ marginTop: "1rem" }} onClick={() => navigate("/login")}>
          Acessar Minha Conta
        </button>
      </div>

    </section>
  );
}