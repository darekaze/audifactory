const { Op } = require('sequelize');
const { Album } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      let albums = null;
      const { search, limit } = req.query;
      if (search) {
        albums = await Album.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre',
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`,
              },
            })),
          },
        });
      } else {
        albums = await Album.findAll({
          limit,
        });
      }
      res.send(albums);
    } catch (err) {
      res.status(500).send({
        error: 'Error in fetching albums',
      });
    }
  },
  async show(req, res) {
    try {
      const album = await Album.findByPk(req.params.albumId);
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
