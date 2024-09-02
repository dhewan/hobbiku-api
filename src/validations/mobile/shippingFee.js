import Joi from 'joi'

const create = {
  body: Joi.object({
    productId: Joi.number().min(1).required(),
    addressId: Joi.number().min(1).required(),
    courierId: Joi.string().min(4).max(4).required()
  })
}

export default { create }
