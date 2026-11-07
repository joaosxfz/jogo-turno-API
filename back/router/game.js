import express from 'express'
import ControllerGames from '../controller/game.js'
const router = express.Router()

router.post("/atacar", ControllerGames.Ataque)
router.post("/defender", ControllerGames.Defesa)
router.post("/curar", ControllerGames.Cura)
router.post("/status", ControllerGames.Status)
router.post("/iniciar", ControllerGames.Iniciar)

export default router