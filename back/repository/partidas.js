import jogos from "../model/partidas.js"

class RepositoryJogos {

    async Buscar() {
        return jogos.findAll()
    }

    async Detalhe(id) {
        return jogos.findByPk(id)
    }

    async Criar(descricao, data, vencedor) {
        await jogos.create({ descricao, data, vencedor })
    }

    async Alterar(id, descricao, data, vencedor) {
        const jogo = await jogos.findByPk(id)

        if (!jogo) {
            throw new Error("Partida não encontrado")
        }

        jogo.descricao = descricao || jogo.descricao
        jogo.data = data || jogo.data
        jogo.vencedor = vencedor || jogo.vencedor

        await jogo.save()
    }

    async Deletar(id) {
        const jogo = await jogos.findByPk(id)

        if (!jogo) {
            throw new Error("Partida não encontrado")
        }

        await jogo.destroy()
    }

}

export default new RepositoryJogos()