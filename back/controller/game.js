import ServiceGame from '../service/game.js'

class ControllerGames {

    Ataque(req, res) {
        const resultado = ServiceGame.Atacar()
        res.send(resultado)
    }

    Defesa(req,res) {
        const resultado = ServiceGame.Defender()
        res.send(resultado)
    }

    Cura(req, res) {
        const resultado = ServiceGame.Curar()
        res.send(resultado)
    }
}

export default new ControllerGames()