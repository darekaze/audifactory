const { User } = require('../models');

module.exports = {
  async put(req, res) {
    try {
      const userId = req.user.id;
      await User.update(req.body, {
        where: {
          id: userId,
        },
      });
      res.send({ updated: true });
    } catch (err) {
      res.status(500).send({
        error: 'Error in updating user profile',
      });
    }
  },
};
