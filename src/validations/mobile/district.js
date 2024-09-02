import Joi from 'joi'

const getDistrict = {
  params: Joi.object({
    cityId: Joi.string().min(1).required()
  })
}

export default { getDistrict }
