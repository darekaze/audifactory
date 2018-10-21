const AuthController = require('./controllers/AuthController');

const AuthControllerRule = require('./rules/AuthControllerRule');

module.exports = (app) => {
  app.post('/register',
    AuthControllerRule.register,
    AuthController.register);

  app.post('/login',
    AuthController.login);
};
