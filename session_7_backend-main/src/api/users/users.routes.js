const UserRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const { register, login, logout, confirm,  newPassword} = require('./users.controllers');

UserRoutes.post('/register', register);
UserRoutes.post('/login', login);
UserRoutes.get("/confirmar-usuario/:token", confirm);
UserRoutes.get('/logout', [isAuth], logout);

module.exports = UserRoutes;