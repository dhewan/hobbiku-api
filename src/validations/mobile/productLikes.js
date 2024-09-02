import Joi from 'joi'

const getProductLikes = {
  params: Joi.object({
    id: Joi.string().min(1).required()
  })
}
const likeProduct = {
  params: Joi.object({
    id: Joi.string().min(1).required()
  })
}

export default { getProductLikes, likeProduct }
