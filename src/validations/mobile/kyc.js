import Joi from 'joi'

const postKyc = {
  body: Joi.object({
    cardNumber: Joi.string().max(100).pattern(/^[0-9]+$/).required(),
    cardName: Joi.string().max(100).required(),
    cardPhoto: Joi.string().uri(),
    selfiePhoto: Joi.string().uri()
  })
}

export default { postKyc }
