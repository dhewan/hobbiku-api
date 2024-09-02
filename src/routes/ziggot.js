import express from 'express'

// MIDDLEWARES

// VALIDATIONS

// CONTROLLERS ROUTES
import ziggotController from '../controllers/ziggot.js'

// ROUTINGS
// AUTH
const ziggotRouter = express.Router()
ziggotRouter.get('/', ziggotController.example)

export default { ziggotRouter }
