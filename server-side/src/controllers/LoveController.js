// const { Op } = require('sequelize');
const { Love } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const { albumId, userId } = req.query;
      const love = await Love.findOne({
        where: { albumId, userId },
      });
      res.send(love);
    } catch (err) {
      res.status(500).send({
        error: 'Error in setting to love',
      });
    }
  },
  async post(req, res) {
    try {
      const { albumId, userId } = req.body.params;
      const love = await Love.findOne({
        where: { albumId, userId },
      });
      if (love) {
        return res.status(400).send({
          error: 'You already have loved this',
        });
      }
      const newLove = await Love.create({
        AlbumId: albumId,
        UserId: userId,
      });
      res.send(newLove);
    } catch (err) {
      res.status(500).send({
        error: 'Error in setting love status',
      });
    }
  },
  async delete(req, res) {
    try {
      const { loveId } = req.params;
      const love = await Love.findByPk(loveId);
      await love.destroy();
      res.send(love);
    } catch (err) {
      res.status(500).send({
        error: 'Error in setting to unloved',
      });
    }
  },
};
