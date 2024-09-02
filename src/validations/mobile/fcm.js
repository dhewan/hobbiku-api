import Joi from 'joi'

const updateFCMToken = {
  body: Joi.object({
    token: Joi.string().required()
  })
}

export default { updateFCMToken }
