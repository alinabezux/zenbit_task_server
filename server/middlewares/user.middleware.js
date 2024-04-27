const {User} = require('../models/models')
const ApiError = require("../errors/ApiError");

module.exports = {
    getUserByEmail: async (req, res, next) => {
        try {
            const {email} = req.body.user;

            const user = await User.findOne({where: {email}});

            if (!user) {
                throw new ApiError(404, 'Неправильний email або пароль.')
            }
            req.user = user;

            next();
        } catch (e) {
            next(e)
        }
    },
    checkIsEmailUnique: async (req, res, next) => {
        try {
            const {email} = req.body.user;

            if (!email) {
                throw new ApiError(400, 'Email відсутній');
            }

            const user = await User.findOne({where: {email}});

            if (user) {
                throw new ApiError(409, 'Користувач з таким email вже існує.');
            }

            next();
        } catch (e) {
            next(e)
        }
    },
}