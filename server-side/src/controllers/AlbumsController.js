const { Album } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const albums = await Album.findAll({
        limit: 10,
      });
      res.send(albums);
    } catch (err) {
      res.status(500).send({
        error: 'Error in fetching albums',
      });
    }
  },
  async post(req, res) {
    try {
      const album = await Album.create(req.body);
      res.send(album);
    } catch (err) {
      res.status(500).send({
        error: 'Error in adding the album',
      });
    }
  },
};
