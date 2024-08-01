const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

class Jokes extends Model {}

Jokes.init({
    jokequestion: {
        type: DataTypes.STRING
    },
    jokeanswer: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "jokes",
    timestamps: false
})

module.exports = Jokes;


