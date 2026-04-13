import { useEffect, useState } from "react";
import { fetchReceitaId } from "../../services/api.js";
import { useParams, Link } from "react-router-dom";

export default function ReceitaDetalhes() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setReceita(null);
    setErro(null);
    fetchReceitasId(id).then(setReceita).catch(setErro);
  }, [id]);

 
  if (erro) {
    return (
      <div className="card">
        <h2>Receita não encontrada</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          Não conseguimos localizar essa receita no nosso sistema. 
        </p>
        <Link className="btn" to="/receitas">
          Voltar para a lista
        </Link>
      </div>
    );
  }

 
  if (!receita) return <p className="card">Lendo os dados da receita... </p>;

  return (
    <div className="card" style={{ padding: "2rem", textAlign: "left" }}>
      <h2>{receita.nome}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Código: {receita.id}</p>

      <hr style={{ margin: "1.5rem 0", border: "0", borderTop: "1px solid #eee" }} />

      {/* Seção de Ingredientes */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ color: "#8d6e63", marginBottom: ".5rem" }}> Ingredientes</h3>
        <p style={{ 
          lineHeight: "1.6", 
          whiteSpace: "pre-line", 
          backgroundColor: "#fafafa",
          padding: "1rem",
          borderRadius: "8px"
        }}>
          {receita.ingredientes}
        </p>
      </div>

      {/* Seção de Modo de Preparo */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8d6e63", marginBottom: ".5rem" }}> Modo de Preparo</h3>
        <p style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
          {receita.modo_de_preparo}
        </p>
      </div>
  
        <Link className="btn btn-outline" to="/receitas">
          Voltar às Receitas
        </Link>
      </div>
   
  );
}