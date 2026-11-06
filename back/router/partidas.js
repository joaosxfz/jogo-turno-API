import express from "express"
import ControllerJogos from "../controller/partidas.js"
const router = express.Router()

router.get("/buscar", ControllerJogos.Buscar)
router.get("/detalhe/:id", ControllerJogos.Detalhe)
router.post("/criar", ControllerJogos.Criar)
router.put("/alterar/:id", ControllerJogos.Alterar)
router.delete("/deletar/:id", ControllerJogos.Deletar)

export default router