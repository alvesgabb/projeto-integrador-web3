// Banco de dados em memória
let receitas = [];
let idAtual = 1;


// Listar todas as receitas
function listarTodos(){
    return receitas;
}



// Aqui ficará a função buscar por id




// Criar receita
function criar ({nome, ingredientes, modo_preparo}){
    const novaReceita = {
        id: idAtual++,
        nome,
        ingredientes,
        modo_preparo
    };
    
    receitas.push(novaReceita);
    return novaReceita;
}




// Aqui ficará a função deletar receita





module.exports = {
    listarTodos,
    criar,
    
}

