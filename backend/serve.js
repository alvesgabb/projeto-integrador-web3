// Aqui se faz os importes
const express = require("express");
const cors = require("cors");
const receitaRoutes = require("./routes/receitaRoutes");
const logger = require("./middlewares/logger");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logger());

// Monta as rotas criar receita
app.use("/receita", receitaRoutes);

// Rota raiz
//app.get("/", (req , res)=> {
//  res.json({res: "API funcionando"});
//});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Essa branch é a estrutura do backend
