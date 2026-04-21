import * as usuarioModel from "../models/usuarioModel.js";
import bcrypt from "bcrypt";

// criar usuário
export async function criarUsuario(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      erro: "Nome, email e senha são obrigatórios",
    });
  }

  const usuarioExistente = usuarioModel.buscarUsuarioPorEmail(email);

  if (usuarioExistente) {
    return res.status(400).json({
      erro: "Email já cadastrado",
    });
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const novoUsuario = usuarioModel.criarUsuario(
    nome.trim(),
    email.trim(),
    senhaHash
  );

  res.status(201).json(novoUsuario);
}

// listar usuários
export function listarUsuarios(req, res) {
  const usuarios = usuarioModel.listarUsuarios();
  res.json(usuarios);
}

// login
export async function loginUsuario(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      erro: "Email e senha são obrigatórios",
    });
  }

  const usuario = usuarioModel.buscarUsuarioPorEmail(email);

  if (!usuario) {
    return res.status(404).json({
      erro: "Usuário não encontrado",
    });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(401).json({
      erro: "Senha inválida",
    });
  }

  res.json({
    mensagem: "Login realizado com sucesso",
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
  });
}