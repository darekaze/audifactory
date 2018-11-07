/* eslint-disable array-callback-return */
const Promise = require('bluebird');

const {
  sequelize,
  Album,
  User,
  // Bookmark,
  // History,
} = require('../src/models');
const albums = require('./albums.json');
const users = require('./users.json');
// const bookmarks = require('./bookmarks.json');
// const histories = require('./histories.json');

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

    // await Promise.all(
    //   bookmarks.map((bookmark) => {
    //     Bookmark.create(bookmark);
    //   }),
    // );

    // await Promise.all(
    //   histories.map((history) => {
    //     History.create(history);
    //   }),
    // );
  });
