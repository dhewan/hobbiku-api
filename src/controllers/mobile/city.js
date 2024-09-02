import { catchAsync, response } from '../../utils/helpers.js'
import Model from '../../db/mysql/models/index.js'
const { Cities } = Model

export const getCity = catchAsync(async (req, res) => {
  const { provinceId } = req.params
  const city = await Cities.findAll({ where: { provinceId } })

  return res.status(200).send(response({ message: 'Get Province Success', data: city }))
})

const cityController = { getCity }

export default cityController
