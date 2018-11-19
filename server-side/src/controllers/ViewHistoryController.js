const _ = require('lodash');
const { ViewHistory, Album } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const histories = await ViewHistory.findAll({
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
        error: 'Error in fetching histories',
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { albumId } = req.body;
      const history = await ViewHistory.create({
        AlbumId: albumId,
        UserId: userId,
      });
      res.send(history);
    } catch (err) {
      res.status(500).send({
        error: 'Error in setting view history',
      });
    }
  },
};
