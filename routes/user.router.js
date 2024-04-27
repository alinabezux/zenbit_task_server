const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');


userRouter.get('/',
    userController.getAllUsers
);

userRouter.post('/signUp',
    userController.register
);

userRouter.post('/logIn',
    userMiddleware.getUserByEmail,
    userController.logIn
);


module.exports = userRouter;