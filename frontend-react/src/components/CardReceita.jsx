import { useState } from "react";

function CardReceita({ receita, onExcluir }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="card-receita">
      <h3>{receita.nome}</h3>
      
      {/*Estado para controlar se o conteúdo extra da receita aparece ou não*/}
      <button onClick={() => setExpandido(!expandido)}>
        {expandido ? "Ocultar" : "Ver Detalhes"}
      </button>

      <button 
        className="btn-excluir" 
        onClick={() => onExcluir(receita.id)}
      > Excluir</button>

      {/*operador ternário: se expandido for true, renderiza a div; se false, retorna null*/}
      {expandido ? (
        <div className="detalhes-preparo">
          <p><strong>Ingredientes:</strong> {receita.ingredientes}</p>
          <p><strong>Modo de Preparo:</strong> {receita.modo_preparo}</p>
        </div>
      ) : null}
    </div>
  );
}

export default CardReceita;