import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {
        const usuario = await encontrarUsuario(dados.nome);
        if (usuario === null) {
            const resultado = await cadastrarUsuario(dados);
            if (resultado.acknowledged) {
                socket.emit("cadastro_sucesso");
            } else {
                socket.emit("cadastro_erro");
            }
        } else{
            socket.emit("usuario_ja_existente")
        }

    });
};

export default registrarEventosCadastro;