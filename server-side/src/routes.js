const AuthController = require('./controllers/AuthController');
const AlbumController = require('./controllers/AlbumController');
const LoveController = require('./controllers/LoveController');
const ViewHistoryController = require('./controllers/ViewHistoryController');
const CartController = require('./controllers/CartController');

const AuthControllerRule = require('./rules/AuthControllerRule');
const isAuthenticated = require('./rules/isAuth');

module.exports = (app) => {
  app.post('/register',
    AuthControllerRule.register,
    AuthController.register);
  app.post('/login',
    AuthController.login);
  app.post('/forgotpassword',
    AuthControllerRule.forgotpassword,
    AuthController.forgotpassword);

  app.get('/albums',
    AlbumController.index);
  app.get('/albums/:albumId',
    AlbumController.show);

  app.post('/albums',
    AlbumController.post);
  app.put('/albums/:albumId',
    AlbumController.put);

  app.get('/loves',
    isAuthenticated,
    LoveController.index);
  app.post('/loves',
    isAuthenticated,
    LoveController.post);
  app.delete('/loves/:loveId',
    isAuthenticated,
    LoveController.delete);

  app.get('/view-history',
    isAuthenticated,
    ViewHistoryController.index);
  app.post('/view-history',
    isAuthenticated,
    ViewHistoryController.post);

  app.get('/cart',
    isAuthenticated,
    CartController.index);
  app.post('/cart',
    isAuthenticated,
    CartController.post);
  app.delete('/cart/:itemId',
    isAuthenticated,
    CartController.delete);
};
