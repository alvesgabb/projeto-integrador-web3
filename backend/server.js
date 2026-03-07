// Aqui se faz os importes
const express = require("express");
const cors = require("cors");
const receitasRoutes = require("./routes/receitasRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// Monta as rotas criar receita
app.use('/receitas' , receitasRoutes);

app.get("/", (req , res)=> {
   res.json({res: "API funcionando"});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});




