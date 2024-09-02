import Joi from 'joi'

export const create = {
  body: Joi.object({
    userId: Joi.string().min(1).required(),
    roleId: Joi.number().min(1).required()
  })
}

const getById = {
  params: Joi.object({
    id: Joi.string().min(1).required()
  })
}

const update = {
  params: Joi.object({
    id: Joi.string().min(1).required()
  }),
  body: Joi.object({
    roleId: Joi.number().allow(null, '').optional(),
    userId: Joi.string().optional()
  })
}

const deleteById = {
  params: Joi.object({
    id: Joi.string().min(1).required()
  })
}

const administratorValidator = {
  create, deleteById, getById, update
}

export default administratorValidator
