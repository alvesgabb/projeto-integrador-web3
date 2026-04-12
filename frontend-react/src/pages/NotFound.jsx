import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="card" style={{ padding: "2rem", margin: "2rem auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>404 - Página não encontrada</h1>
      <p style={{ marginTop: ".5rem", color: "var(--text-muted)" }}>
        Ops! Receita não encontrada. <br />
        Mas calma... dá pra voltar para o caminho certo.
      </p>


      <Link to="/" className="btn" style={{ 
        marginTop: "2.5rem", 
        display: "inline-block",
        padding: "1rem 2rem", 
        verticalAlign: "middle" 
      }}>

        Voltar para a página inicial
      </Link>
    </section>
  );
}
