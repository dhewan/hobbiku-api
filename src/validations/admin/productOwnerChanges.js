import Joi from 'joi'

const getProductOwnerChanges = {
  params: Joi.object({
    productId: Joi.number().min(1).required()
  }),
  query: Joi.object({
    page: Joi.number().min(1).allow(null, '').optional(),
    limit: Joi.number().min(1).allow(null, '').optional(),
    sort: Joi.string().valid('createdAt').allow(null, '').optional(),
    order: Joi.string().valid('ASC', 'DESC').allow(null, '').optional(),
    search: Joi.string().allow(null, '').optional()
  })
}

export default {
  getProductOwnerChanges
}
