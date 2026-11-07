import { campeaoInicial, monstroInicial } from "../model/game.js"

class RepositoryGame {
    constructor() {
        this.Reiniciar()
    }

    Reiniciar() {
        this.hpCampeao = 300
        this.hpInimigo = 200 

    }

    Estado() {
        return {

        }
    }
}

export default new RepositoryGame()