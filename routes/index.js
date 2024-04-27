const router = require('express').Router();

const userRouter = require("./user.router");
const itemRouter = require("./item.router");

router.use('/users', userRouter)
router.use('/items', itemRouter)

module.exports = router;