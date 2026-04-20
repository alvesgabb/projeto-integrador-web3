import express from "express";
import cors from "cors";
import receitasRoutes from "./routes/receitasRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js"
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do sistema de receitas rodando! Use /receitas para ver os dados.");
});

app.use("/receitas", receitasRoutes);
app.use("/usuarios",usuariosRoutes);

//app.use(errorHandler)

export default app;
