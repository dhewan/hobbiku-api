import express from 'express'

// MIDDLWARES
import sessionValidator from '../middlewares/session.js'
import validate from '../middlewares/request.js'

// VALIDATIONS
import cloudfrontValidator from '../validations/aws/cloudfront.js'

// CONTROLLERS ROUTES
import cloudfrontController from '../controllers/aws/cloudfront.js'

// ROUTINGS
const cloudfrontRouter = express.Router()
cloudfrontRouter.get('/signed-url', sessionValidator([]), validate(cloudfrontValidator.get), cloudfrontController.getSignedUrlPublic)

export default { cloudfrontRouter }
