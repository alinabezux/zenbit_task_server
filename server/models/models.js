const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING(500), allowNull: false},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    yield: {type: DataTypes.STRING, allowNull: false},
    sold: {type: DataTypes.STRING, allowNull: false},
    tiket: {type: DataTypes.STRING, allowNull: false},
    days: {type: DataTypes.INTEGER, allowNull: false},

})

module.exports = {
    User,
    Item
}