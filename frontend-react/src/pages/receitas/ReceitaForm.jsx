import { useState } from "react";
import { createProduct } from "../../services/api.js"; 
import { useNavigate } from "react-router-dom";

export default function ReceitaForm() {
    const [nome, setNome] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modo_preparo, setModo_preparo] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(evento) {
        evento.preventDefault();

    
        const nomeSubmit = nome.trim();
        const ingredientesSubmit = ingredientes.trim();
        const modo_preparoSubmit = modo_preparo.trim();

        if (!nomeSubmit || !ingredientesSubmit || !modo_preparoSubmit) {
            alert("Preencha todos os campos corretamente! ");
            return;
        }

        try {
            // Envia direto para a API
            await createProduct({
                nome: nomeSubmit,
                ingredientes: ingredientesSubmit,
                modo_preparo: modo_preparoSubmit
            });

            alert("Receita adicionada com sucesso!");
            
            // Redireciona para a lista de receitas
            navigate("/receitas"); 

        } catch (error) {
            console.error(error);
            alert("Erro ao salvar a receita. Verifique se o servidor está ligado.");
        }
    }

    return (
        <form className="card" onSubmit={handleSubmit} style={{ maxWidth: 600, padding: "2rem", margin: "0 auto" }}>
            <h2 style={{ color: "#5D4037", marginBottom: "1rem" }}>Nova Receita</h2>
            
            <div style={{ display: "grid", gap: "1rem" }}>
                <input
                    className="input"
                    type="text"
                    placeholder="Nome da receita"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <textarea
                    className="input"
                    placeholder="Ingredientes..."
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                    required
                    style={{ minHeight: "80px" }}
                />

                <textarea
                    className="input"
                    placeholder="Modo de preparo..."
                    value={modo_preparo}
                    onChange={(e) => setModo_preparo(e.target.value)}
                    required
                    style={{ minHeight: "120px" }}
                />

                <button className="btn" type="submit">
                    Adicionar Receita
                </button>
            </div>
        </form>
    );
}