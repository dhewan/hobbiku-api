import Joi from 'joi'

const createWhistlist = {
  body: Joi.object({
    productId: Joi.number().required()
  })
}

const listWhistlist = {
  query: Joi.object({
    order: Joi.string().valid('ASC', 'DESC'),
    sort: Joi.string(),
    limit: Joi.string(),
    page: Joi.string()
  })
}

const unwishlist = {
  params: Joi.object({
    productId: Joi.number().required()
  })
}
export default {
  createWhistlist,
  listWhistlist,
  unwishlist
}
