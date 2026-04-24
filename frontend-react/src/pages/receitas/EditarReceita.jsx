import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchReceitaId, updateReceita } from "../../services/api.js";
import styles from "./NovaReceita.module.css";

function EditarReceita() {
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

  // carrega receita ao abrir página
  useEffect(() => {
    async function carregarReceita() {
      try {
        const data = await fetchReceitaId(id);

        setFormData({
          nome: data.nome || "",
          imagem: data.imagem || "",
          ingredientes: Array.isArray(data.ingredientes)
            ? data.ingredientes.join(", ")
            : data.ingredientes,
          modo_de_preparo: Array.isArray(data.modo_de_preparo)
            ? data.modo_de_preparo.join(", ")
            : data.modo_de_preparo,
        });
      } catch (err) {
        setErro("Erro ao carregar receita.");
      }
    }

    carregarReceita();
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
    const dadosFormatados = {
      ...formData,
      ingredientes: formData.ingredientes
        .split(/[,;\n]/)
        .map((i) => i.trim())
        .filter((i) => i !== ""),
    };

    await updateReceita(id, dadosFormatados);

    setMensagem("✅ Receita atualizada com sucesso!");

    setTimeout(() => {
      navigate("/receitas");
    }, 1000);

  } catch (err) {
    console.error(err);
    setErro("❌ Erro ao atualizar receita.");
  }
} 

  return (
    <section className={styles.container}>
      <h2>Editar Receita</h2>

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
          Atualizar Receita
        </button>

        {mensagem && <p className={styles.mensagemSucesso}>{mensagem}</p>}
        {erro && <p className={styles.mensagemErro}>{erro}</p>}
      </form>
    </section>
  );
}

export default EditarReceita;