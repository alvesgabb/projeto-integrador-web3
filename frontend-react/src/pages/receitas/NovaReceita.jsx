import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createReceita, updateReceita, fetchReceita } from "../../services/api.js";
import styles from "./NovaReceita.module.css";

function NovaReceita() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    imagem: "",
    ingredientes: "",
    modo_de_preparo: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  // Efeito para carregar dados se for edição
  useEffect(() => {
    if (id) {
      async function carregarDados() {
        try {
          const receitas = await fetchReceita();
          const alvo = receitas.find((r) => r.id === parseInt(id));
          if (alvo) setFormData(alvo);
        } catch (err) {
          setErro("❌ Erro ao buscar dados para edição.");
        }
      }
      carregarDados();
    }
  }, [id]);

 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setMensagem("");

    try {
      if (id) {
       
        await updateReceita(id, formData);
        setMensagem("✅ Receita atualizada com sucesso!");
        setTimeout(() => navigate("/receitas"), 1500);
      } else {
         
        await createReceita(formData);
        setMensagem("✅ Receita cadastrada com sucesso!");
        setFormData({ nome: "", imagem: "", ingredientes: "", modo_de_preparo: "" });
      }
    } catch (err) {
      console.error(err);
      setErro(`❌ Erro ao ${id ? "atualizar" : "cadastrar"} receita.`);
    }
  }

  return (
    <section className={styles.container}>
      <h2>{id ? "Editar Receita" : "Cadastrar Nova Receita"}</h2>

      <form onSubmit={handleSubmit} className={styles.formulario}>
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
          {id ? "Salvar Alterações" : "Adicionar Receita"}
        </button>

        {mensagem && <p className={styles.mensagemSucesso}>{mensagem}</p>}
        {erro && <p className={styles.mensagemErro}>{erro}</p>}
      </form>
    </section>
  );
}

export default NovaReceita;