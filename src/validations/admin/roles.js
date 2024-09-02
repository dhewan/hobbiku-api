import Joi from 'joi'

export const create = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
  })
}

export const update = {
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string()
  })
}

const roleValidator = {
  create,
  update
}

export default roleValidator
