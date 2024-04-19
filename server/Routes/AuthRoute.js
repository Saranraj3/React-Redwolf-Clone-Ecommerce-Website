const express = require('express');
const AuthController = require('../Controller/AuthController');

const Router = express.Router();

Router.post('/signup', AuthController.signup);
Router.post('/login', AuthController.login);

module.exports = Router;
