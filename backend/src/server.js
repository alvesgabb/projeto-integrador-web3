import app from "./app.js";
import "./database/init.js";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
