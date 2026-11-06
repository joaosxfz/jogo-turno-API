import express from 'express'
import jogo from './router/partidas.js'
import routerJogo from './router/game.js'
import database from './config/database.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/jogos', jogo)
app.use('/partidas', routerJogo)

const PORT = 3000

database.db.sync({ force: false })
    .then((_) => {
        app.listen(PORT, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })