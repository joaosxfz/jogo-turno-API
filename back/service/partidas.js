import RepositoryJogos from '../repository/partidas.js'

class ServiceJogos {

    async Buscar() {
        return RepositoryJogos.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const jogo = await RepositoryJogos.Detalhe(id)

        if (!jogo) {
            throw new Error(`ID ${id} do jogo não encontrado`)
        }

        return jogo
    }

    async Criar(descricao, data, vencedor) {
        if (!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os dados")
        }
        const jogo = await RepositoryJogos.Criar(descricao, data, vencedor)

        return jogo
    }

    async Alterar(id, descricao, data, vencedor) {
        if (!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar os dados");
        }

        const jogoAlterado = await RepositoryJogos.Alterar(id, descricao, data, vencedor)

        return jogoAlterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const jogo = await RepositoryJogos.Deletar(id)

        return jogo
    }

}

export default new ServiceJogos()