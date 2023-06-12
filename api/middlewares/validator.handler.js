const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  /**
   * Clousures, Middlware dinamic
   *
   */
  return (req, res, next) => {
    const data = req[property];               // config Joi for throw allow handlers
    const { error } = schema.validate(data, {abortEarly: false});

    if(error) {
      next(boom.badRequest(error));
    }

    next();
  }
}

module.exports = validatorHandler;
