const bcrypt = require('bcrypt');
const {User, Item} = require('../models/models')
const ApiError = require("../errors/ApiError");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.findAll({});

            res.status(200).json(users);
        } catch (e) {
            next(e)
        }
    },

    register: async (req, res, next) => {
        try {
            const {email, password} = req.body.user;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({email, password: hashedPassword});

            return res.status(200).json(user)

        } catch (e) {
            next(e)
        }
    },

    logIn: async (req, res, next) => {
        try {
            const {user, body} = req;

            const isPasswordsSame = await bcrypt.compare(body.user.password, user.dataValues.password);

            if (!isPasswordsSame) {
                throw new ApiError(409, 'Неправильний email або пароль.');
            }

            res.status(201).json(user.dataValues.id)
        } catch (e) {
            next(e);
        }
    },
}