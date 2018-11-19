const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');
const config = require('./');

passport.use(
  new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret,
  }, async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        where: { id: jwtPayload.id },
      });
      if (!user) {
        return done(new Error(), false);
      }
      return done(null, user);
    } catch (err) {
      return done(new Error(), false);
    }
  }),
);

module.exports = null;
