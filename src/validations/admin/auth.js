import Joi from 'joi'

const forgotPassword = {
  body: Joi.object({
    email: Joi.string().email().required()
  })
}

const resetPassword = {
  body: Joi.object({
    token: Joi.string().required(),
    password: Joi.string().required()
  })
}

const signIn = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}

const AuthValidator = {
  forgotPassword,
  resetPassword,
  signIn
}

export default AuthValidator
