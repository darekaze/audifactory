const Joi = require('joi');

module.exports = {
  requirement(req, res, next) {
    if (!req.body.recaptcha) {
      res.status(403).send({
        error: 'Please enter the reCAPTCHA!',
      });
    } else if (!req.body.credential) {
      res.status(403).send({
        error: 'Credential cannot be empty!',
      });
    } else next();
  },

  register(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phonenumber: Joi.string().regex(/^[0-9]{8,20}$/),
      name: Joi.string().alphanum(),
      address: Joi.string(),
    });

    const { error } = Joi.validate(req.body.credential, schema);

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
    } else next();
  },
  forgotpassword(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phonenumber: Joi.string().regex(/^[0-9]{8,20}$/),
    });

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
