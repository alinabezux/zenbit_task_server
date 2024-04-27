const itemRouter = require('express').Router();
const itemController = require('../controllers/items.controller');

itemRouter.get('/', itemController.getAllItems);
itemRouter.post('/', itemController.createItem)

module.exports = itemRouter;