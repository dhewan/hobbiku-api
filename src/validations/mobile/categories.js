import Joi from 'joi'

const getList = {
  query: Joi.object({
    page: Joi.number().min(1).allow(null, '').optional(),
    limit: Joi.number().min(1).allow(null, '').optional(),
    sort: Joi.string().valid('name').allow(null, '').optional(),
    order: Joi.string().valid('ASC', 'DESC').allow(null, '').optional(),
    search: Joi.string().allow(null, '').optional()
  })
}

export default {
  getList
}
