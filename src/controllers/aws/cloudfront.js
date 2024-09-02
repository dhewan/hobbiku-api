import cloudfront from '../../services/cloudfront.js'
import { catchAsync, response } from '../../utils/helpers.js'

const getSignedUrlPublic = catchAsync(async (req, res) => {
  const { url } = req.query
  const signedUrl = await cloudfront.getSignedUrl(url)
  res.status(200).json(response({
    message: 'Success get signed url.',
    data: { signedUrl }
  }))
})

const cloudfrontController = { getSignedUrlPublic }
export default cloudfrontController
