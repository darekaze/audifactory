const _ = require('lodash');
const {
  PurchaseHistory,
  Cart,
  Album,
} = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const histories = await PurchaseHistory.findAll({
        where: { userId },
        include: [{ model: Album }],
        group: ['AlbumId'],
        order: [
          ['createdAt', 'DESC'],
        ],
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Album,
          history,
        ));
      res.send(_.uniqBy(histories, history => history.AlbumId));
    } catch (err) {
      res.status(500).send({
        error: 'Error in fetching purchase histories',
      });
    }
  },
  async post(req, res) {
    let i;
    try {
      const { albums, user } = req.body.items;
      const userId = user.id;
      for (i = 0; i < albums.length; i += 1) {
        PurchaseHistory.create({
          AlbumId: albums[i].itemId,
          UserId: user.id,
        });
      }
      await Cart.destroy({
        attributes: ['UserId'],
        where: {
          userId,
        },
      });
      res.send('Successful');
    } catch (error) {
      res.status(500).send({
        error: 'Error in purchasing process',
      });
    }
  },
};
