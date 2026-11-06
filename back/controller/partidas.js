import ServiceJogos from '../service/partidas.js'

class ControllerJogos {

    async Buscar(req, res) {
        try {
            const jogos = await ServiceJogos.Buscar()

            res.status(200).send({ jogos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id
            const jogos = await ServiceJogos.Detalhe(id)

            res.status(200).send({ jogos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServiceJogos.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "Jogo criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { descricao, data, vencedor } = req.body

            await ServiceJogos.Alterar(id, descricao, data, vencedor)

            res.status(200).send({ message: "Jogo alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServiceJogos.Deletar(id)

            res.status(204).send()
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default new ControllerJogos()