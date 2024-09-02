import Joi from 'joi'

const getBalanceSaleMutations = {
  query: Joi.object({
    page: Joi.number().min(1).allow('').optional(),
    limit: Joi.number().min(1).allow('').optional(),
    type: Joi.string().valid('credit', 'debit').allow('').optional(),
    startDate: Joi.date().allow('').optional(),
    endDate: Joi.date().allow('').optional()
  })
}

export default { getBalanceSaleMutations }
