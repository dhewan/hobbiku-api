import Joi from 'joi'

const block = {
  body: Joi.object({
    blockedUserId: Joi.string().required()
  })
}
const unblock = {
  body: Joi.object({
    blockedUserId: Joi.string().required()
  })
}

export default { block, unblock }
