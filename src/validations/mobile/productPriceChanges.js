import Joi from 'joi'

const getProductPriceChanges = {
  params: Joi.object({
    id: Joi.number().min(1).required()
  }),
  query: Joi.object({
    page: Joi.number().min(1).allow(null, '').optional(),
    limit: Joi.number().min(1).allow(null, '').optional(),
    interval: Joi.string().valid('day', 'week', 'month', 'year').allow(null, '').optional(),
    range: Joi.number().min(1).allow(null, '').optional()
  })
}

export default {
  getProductPriceChanges
}
