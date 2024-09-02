import Models from '../../db/mysql/models/index.js'
import { catchAsync, response } from '../../utils/helpers.js'

const { Users } = Models

const updateFCMToken = catchAsync(async (req, res) => {
  const userId = req.user.userId
  const { token } = req.body

  const user = await Users.findOne({ where: { userId } })
  if (!user) {
    return res.status(404).json(response({ error: 'User not found' }))
  }

  await user.update({ fcmToken: token })

  return res.status(200).json(response({ message: 'FCM token updated' }))
})

export default { updateFCMToken }
