/* eslint-disable array-callback-return */
const Promise = require('bluebird');

const {
  sequelize,
  Album,
  User,
  Love,
  ViewHistory,
} = require('../src/models');
const albums = require('./albums.json');
const users = require('./users.json');
const loves = require('./loves.json');
const viewHistories = require('./viewHistories.json');

sequelize.sync({ force: true })
  .then(async () => {
    await Promise.all(
      users.map((user) => {
        User.create(user);
      }),
    );

    await Promise.all(
      albums.map((album) => {
        Album.create(album);
      }),
    );

    await Promise.all(
      loves.map((love) => {
        Love.create(love);
      }),
    );

    await Promise.all(
      viewHistories.map((history) => {
        ViewHistory.create(history);
      }),
    );
  });
