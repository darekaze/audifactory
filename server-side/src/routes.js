const AuthController = require('./controllers/AuthController');
const AlbumsController = require('./controllers/AlbumsController');

const AuthControllerRule = require('./rules/AuthControllerRule');

module.exports = (app) => {
  app.post('/register',
    AuthControllerRule.register,
    AuthController.register);

  app.post('/login',
    AuthController.login);

  app.get('/albums',
    AlbumsController.index);

  app.post('/albums',
    AlbumsController.post);
};
