// Aqui se faz conexão com arquivo db
const db = require("../db")

function listarTodos(){
    return db.prepare('SELECT id, nome, ingredientes, modo_preparo FROM receita ORDER BY id').all();
}

function BuscarporId(id){
    return db.prepare('SELECT id, nome, ingredientes, modo_preparo FROM receita WHERE id = ?').get(id)
}


function criar ({id, nome, ingredientes, modo_preparo}){
    const stmt = db.prepare('INSERT INTO receita (id, nome, ingredientes, modo_preparo) VALUES (?,?,?,?)')
    const info = stmt.run(id, nome, ingredientes, modo_preparo);
    return BuscarporId(info.lastInsertRowid)
}

function deletar(id){
    const stmt= db.prepare('DELETE FROM receita WHERE id = ?')
    const info = stmt.run(id)
    return info.changes>0
}


module.exports = {
    listarTodos,
    criar,
    BuscarporId,
    deletar,
}

//Essa branch é a estrutura do backend