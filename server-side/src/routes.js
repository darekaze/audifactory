const AuthController = require('./controllers/AuthController');
const AlbumController = require('./controllers/AlbumController');
const LoveController = require('./controllers/LoveController');
const ViewHistoryController = require('./controllers/ViewHistoryController');

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

  app.get('/loves',
    LoveController.index);
  app.post('/loves',
    LoveController.post);
  app.delete('/loves/:loveId',
    LoveController.delete);

  app.get('/view-history',
    ViewHistoryController.index);
  app.post('/view-history',
    ViewHistoryController.post);
};
