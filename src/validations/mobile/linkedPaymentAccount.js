import Joi from 'joi'

const create = {
  body: Joi.object({
    paymentMethodId: Joi.string().min(4).required(),
    accountName: Joi.string().required(),
    accountNumber: Joi.number().required()
  })
}

export default { create }
