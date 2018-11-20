// const { Op } = require('sequelize');
const _ = require('lodash');
const { Cart, Album } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const { albumId } = req.query;
      const where = { userId };
      if (albumId) {
        where.albumId = albumId;
      }
      const items = await Cart.findAll({
        where,
        include: [{ model: Album }],
      }).map(item => item.toJSON())
        .map(item => _.extend({
          itemId: item.id,
        }, item.Album));
      res.send(items);
    } catch (err) {
      res.status(500).send({
        error: 'Error in showing cart items',
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { albumId } = req.body;
      const newItem = await Cart.create({
        AlbumId: albumId,
        UserId: userId,
      });
      res.send(newItem);
    } catch (err) {
      res.status(500).send({
        error: 'Error in setting item status',
      });
    }
  },
  async delete(req, res) {
    try {
      const userId = req.user.id;
      const { itemId } = req.params;
      const item = await Cart.findOne({
        where: {
          id: itemId,
          userId,
        },
      });
      if (!item) {
        return res.status(403).send({
          error: 'No cart item!!',
        });
      }
      await item.destroy();
      res.send(item);
    } catch (err) {
      res.status(500).send({
        error: 'Error in deleting item',
      });
    }
  },
};
