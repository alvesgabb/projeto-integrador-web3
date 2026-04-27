import { useState } from "react";

function ReceitaForm({ onAdicionar}) {
    const [nome, setNome] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modo_preparo, setModo_preparo] = useState("");

    function handleSubmit(evento) {
        evento.preventDefault();

        const nomeSubmit = nome.trim();
        const ingredientesSubmit = ingredientes.trim();
        const modo_preparoSubmit = modo_preparo.trim();

        if (!nomeSubmit || !ingredientesSubmit || !modo_preparoSubmit) {
            alert("Preencha um nome, ingredientes e modo de preparo válidos");
            return;

        }

        onAdicionar({nome: nomeSubmit, ingredientes: ingredientesSubmit, modo_preparo: modo_preparoSubmit});

        // Limpa o formulário
        setNome("");
        setIngredientes("");
        setModo_preparo("");
    }

    return (
        <form classNome="form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nome da receita"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <input
            type="text"
            placeholder="Ingredientes"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Modo de preparo"
            value={modo_preparo}
            onChange={(e) => setModo_preparo(e.target.value)}
            />

            <button type="submit">Adicionar</button>

        </form>
    )
}
export default ReceitaForm;