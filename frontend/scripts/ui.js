export function renderizarReceita(receitas) {
    const lista = document.getElementById('lista-receitas');

    lista.innerHTML = '';

    for (const receita of receitas) {
        const div = document.createElement('div');
        div.classList.add('card-receita');

        div.innerHTML = `
            <h3>${receita.nome}</h3>
            <p><strong>🛒 Ingredientes:</strong> ${receita.ingredientes}</p>

            <div class ="detalhes-preparo">
            <hr>
            <p><strong>Modo de preparo</strong>
            ${receita.modo_preparo}</p>
           </div>
            <button class="btn-ver-mais">Ver Receita Completa</button>
            
        `;

        const botao = div.querySelector(".btn-ver-mais");
        botao.addEventListener("click",()=>{
            div.classList.toggle("aberto");
        });

        lista.appendChild(div);
    
    }
}
