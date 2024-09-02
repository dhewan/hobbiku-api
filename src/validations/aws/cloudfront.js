import Joi from 'joi'

export const get = {
  query: Joi.object({
    url: Joi.string().uri().required()
  })
}

const cloudfrontValidator = {
  get
}

export default cloudfrontValidator
