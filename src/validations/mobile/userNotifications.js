import Joi from 'joi'

const getUserNotifications = {
  query: Joi.object({
    page: Joi.number().min(1).allow(null, '').optional(),
    limit: Joi.number().min(1).allow(null, '').optional(),
    type: Joi.string().valid('all', 'invoice', 'promo', 'info', 'general', 'delivery').allow(null, '').optional(),
    types: Joi.array().items(Joi.string().valid('invoice', 'promo', 'info', 'general', 'delivery')).optional()
  })
}

const readUserNotification = {
  params: Joi.object({
    id: Joi.number().min(1).required()
  })
}

export default {
  getUserNotifications,
  readUserNotification
}
