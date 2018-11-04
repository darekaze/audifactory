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
  async show(req, res) {
    try {
      const album = await Album.findById(req.params.albumId);
      res.send(album);
    } catch (err) {
      res.status(500).send({
        error: 'Error in showing album',
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
  async put(req, res) {
    try {
      await Album.update(req.body, {
        where: {
          id: req.params.albumId,
        },
      });
      res.send({ updated: true });
    } catch (err) {
      res.status(500).send({
        error: 'Error in updating the album',
      });
    }
  },
};
