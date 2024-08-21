const Joi = require('joi');
 
const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(), 
  genre: Joi.string().required(),
  performer: Joi.string().required(), 
  duration: Joi.number().integer().min(0),
  album_id: Joi.string().allow(null)
});
module.exports = { SongPayloadSchema };
