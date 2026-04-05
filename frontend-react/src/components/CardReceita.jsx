import { useState } from "react";
import styles from "./cardReceita.module.css";

function CardReceita({ receita, onExcluir }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{receita.nome}</h3>

      <img 
        src={receita.imagem} 
        alt={receita.nome} 
        className={styles.imagem}
      />

      <div className={styles.botoes}>
        <button 
          className={styles.btnDetalhes}
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? "Ocultar" : "Ver Detalhes"}
        </button>

        <button 
          className={styles.btnExcluir}
          onClick={() => onExcluir && onExcluir(receita.id)}
        >
          Excluir
        </button>
      </div>

      {expandido && (
        <div className={styles.detalhes}>
          <h4>Ingredientes:</h4>
          <ul>
            {receita.ingredientes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Modo de Preparo:</h4>
          <ul>
            {receita.modo_de_preparo.map((passo, index) => (
              <li key={index}>{passo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardReceita;