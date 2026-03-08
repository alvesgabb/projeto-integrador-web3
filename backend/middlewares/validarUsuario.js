function validaUsuario(req, res, next) {
  const { nome, email } = req.body;
  if (!nome || !email)
    return res
      .status(400)
      .json({ erro: 'Campos "nome" e "email" são obrigatórios' });
  next();
}

module.exports = validaUsuario;
