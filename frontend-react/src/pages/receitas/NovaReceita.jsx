import { useState } from "react";
import { createReceita } from "../../services/api.js"; 
import styles from "./NovaReceita.module.css";


function NovaReceita({ onReceitaCriada }) {
  const [formData, setFormData] = useState({
    nome: "",
    imagem: "",
    ingredientes: "",
    modo_de_preparo: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}))
  }

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setMensagem("");

        try {
          const dadosFormatados = {
  ...formData,
  ingredientes: formData.ingredientes
    .split(",")
    .map((i) => i.trim()),
};

 const novaReceita = await createReceita(dadosFormatados);

      setMensagem("✅ Receita cadastrado com sucesso!");
      setFormData({
        nome: "",
        imagem: "",
        ingredientes:"",
        modo_de_preparo:"",
      });

       if (onReceitaCriada) onReceitaCriada(NovaReceita);
    } catch (err) {
      console.error(err);
      setErro("❌ Erro ao cadastrar receita.");
    }
  }    
        
  return (
    <section className={styles.container}>
      <h2>Cadastrar Nova Receita</h2>

      <form onSubmit={handleSubmit} className={styles.formulario}>
        {/* Nome da Receita */}
          <div className={styles.campo}>
            <label htmlFor="nome">Nome da Receita</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

        {/* Imagem */}
          <div className={styles.campo}>
          <label htmlFor="imagem">URL da Imagem</label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            required
          />
          </div>

          {/* Ingredientes */}
          <div className={styles.campo}>
            <label htmlFor="ingredientes">Ingredientes</label>
            <input
              type="text"
              id="ingredientes"
              name="ingredientes"
              value={formData.ingredientes}
              onChange={handleChange}
              required
            />
          </div>

         {/* Modo de preparo */}
          <div className={styles.campo}>
            <label htmlFor="modo_de_preparo">Modo de Preparo</label>
            <textarea
              id="modo_de_preparo"
              name="modo_de_preparo"
              value={formData.modo_de_preparo}
              onChange={handleChange}
              rows="5"
              required
            />
            </div>
              
        <button type="submit" className={styles.btnEnviar}>
          Adicionar Receita
        </button>

        {mensagem && <p className={styles.mensagemSucesso}>{mensagem}</p>} 
        
        {erro && <p className={styles.mensagemErro}>{erro}</p>}
      </form>
    </section>
  );
}

export default NovaReceita;