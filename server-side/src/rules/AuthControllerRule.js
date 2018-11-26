const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'),
      ),
      phonenumber: Joi.string().regex(
        new RegExp('^[0-9]{8,20}$'),
      ),
      name: Joi.string().regex(
        new RegExp('^[a-z ,.-]+$'),
      ),
    };

    const { error } = Joi.validate(req.body.credentials, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'Password must be at least 8 characters long and not exceeding 32 characters',
          });
          break;
        case 'phonenumber':
          res.status(400).send({
            error: 'Phone number must be at least 8 digits',
          });
          break;
        case 'name':
          res.status(400).send({
            error: 'Name must be characters only',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
          break;
      }
    }
    if (!error) next();
  },
  forgotpassword(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      phonenumber: Joi.string().regex(
        new RegExp('^[0-9]{8,20}$'),
      ),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'),
      ),
    };

    const { error } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address',
          });
          break;
        case 'phonenumber':
          res.status(400).send({
            error: 'Phone number must be at least 8 digits',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'Password must be at least 8 characters long and not exceeding 32 characters',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid Information',
          }); break;
      }
    }
    if (!error) next();
  },
};
