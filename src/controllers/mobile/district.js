import { catchAsync, response } from '../../utils/helpers.js'
import Model from '../../db/mysql/models/index.js'
const { Districts } = Model

export const getDistrict = catchAsync(async (req, res) => {
  const { cityId } = req.params
  const district = await Districts.findAll({ where: { cityId } })

  return res.status(200).send(response({ message: 'Get Province Success', data: district }))
})

const districtController = { getDistrict }

export default districtController
