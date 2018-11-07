const AuthController = require('./controllers/AuthController');
const AlbumController = require('./controllers/AlbumController');

const AuthControllerRule = require('./rules/AuthControllerRule');

module.exports = (app) => {
  app.post('/register',
    AuthControllerRule.register,
    AuthController.register);
  app.post('/login',
    AuthController.login);

  app.get('/albums',
    AlbumController.index);
  app.get('/albums/:albumId',
    AlbumController.show);

  app.post('/albums',
    AlbumController.post);
  app.put('/albums/:albumId',
    AlbumController.put);
};
