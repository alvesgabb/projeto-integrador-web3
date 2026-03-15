export function renderizarReceita(receitas) {
    const lista = document.getElementById('lista-receitas');

    lista.innerHTML = '';

    for (const receita of receitas) {
        const div = document.createElement('div');
        div.classList.add('card-receita');

        div.innerHTML = `
            <h3>${receita.nome}</h3>
            <p><strong>🛒 Ingredientes:</strong> ${receita.ingredientes}</p>

            <button class="btn-ver-mais">Ver Receita Completa</button>
            
        `;

        lista.appendChild(div);
    }
}