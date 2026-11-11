import criarHashESalSenha from "../utils/criarHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({nome});
}

function cadastrarUsuario({nome, senha}) {
    const {hashSenha, salSenha} = criarHashESalSenha(senha);

    return usuariosColecao.insertOne({nome, hashSenha, salSenha});
}

export { cadastrarUsuario, encontrarUsuario};
   