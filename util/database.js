const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete','root','Karthik@26',{dialect:"mysql",host:'localhost'})

module.exports = sequelize;