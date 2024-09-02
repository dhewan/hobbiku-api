import Joi from 'joi'

const list = {
  query: Joi.object({
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1).max(100),
    sort: Joi.string().valid('updatedAt').allow(null, '').optional(),
    order: Joi.string().valid('ASC', 'DESC').allow(null, '').optional(),
    search: Joi.string().allow(null, '').optional()
  })
}

const readInbox = {
  params: Joi.object({
    inboxId: Joi.string().min(1).required()
  })
}

export default { list, readInbox }
