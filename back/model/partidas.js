import database from "../config/database.js";

class Jogos {
    constructor() {
        this.model = database.db.define("jogos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            data: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            vencedor: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })        
    }
}

export default new Jogos().model