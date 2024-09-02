import Model from '../db/mysql/models/index.js'
import { catchAsync, response } from '../utils/helpers.js'

const { Ziggot } = Model

const example = catchAsync(async (req, res) => {
  const ziggot = await Ziggot.findAll()
  res.status(200).send(response({ message: 'ziggot', data: ziggot }))
})

export default { example }
