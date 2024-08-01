const express = require("express");
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('caramback','user','pass',{
    dialect: "sqlite",
    host: "./database/caramback.sqlite"
});

module.exports = sequelize;


