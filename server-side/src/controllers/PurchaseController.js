const {
  PurchaseHistory, Cart,
} = require('../models');

module.exports = {
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
