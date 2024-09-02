import Models from '../../db/mysql/models/index.js'
import { catchAsync, response } from '../../utils/helpers.js'

const { Couriers } = Models

const getCouriers = catchAsync(async (req, res) => {
  const couriers = await Couriers.findAll()
  return res.status(200).json(response({ data: couriers }))
})

export default { getCouriers }
