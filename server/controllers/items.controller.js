const {Item} = require('../models/models');

module.exports = {
    getAllItems: async (req, res, next) => {
        try {
            const items = await Item.findAll({});

            res.status(200).json(items);
        } catch (e) {
            next(e)
        }
    },

    createItem: async (req, res, next) => {
        try {
            const {title, img, price, yield, sold, tiket, days} = req.body
            const item = await Item.create({title, img, price, yield, sold, tiket, days})

            return res.status(200).json(item)
        } catch (e) {
            next(e)
        }
    }
}