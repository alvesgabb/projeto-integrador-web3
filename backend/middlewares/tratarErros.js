app.use((err, req, res, next) => {
  console.error("[ERRO]", err);
  res.status(500).json({ erro: "Ocorreu um erro no servidor" });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`),
);
