import { catchAsync, response } from '../../utils/helpers.js'
import Model from '../../db/mysql/models/index.js'
const { Provincies } = Model

export const getProvince = catchAsync(async (req, res) => {
  const province = await Provincies.findAll()

  return res.status(200).send(response({ message: 'Get Province Success', data: province }))
})

const provinceController = { getProvince }

export default provinceController
