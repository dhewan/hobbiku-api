import Joi from 'joi'

const getCity = {
  params: Joi.object({
    provinceId: Joi.string().min(1).required()
  })
}

export default { getCity }
