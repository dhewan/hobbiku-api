import Joi from 'joi'

const uploadProofOfPayment = {
  params: Joi.object({
    withdrawCode: Joi.string().required()
  }),
  body: Joi.object({
    image: Joi.string().uri()
  })
}
const getProofOfPayment = {
  params: Joi.object({
    withdrawCode: Joi.string().required()
  })
}
const getDataTransfer = {
  params: Joi.object({
    withdrawCode: Joi.string().required()
  })
}

export default { uploadProofOfPayment, getProofOfPayment, getDataTransfer }
