import Models from '../../db/mysql/models/index.js'
import { catchAsync, response } from '../../utils/helpers.js'

const { BalanceSales } = Models

const getBalanceSale = catchAsync(async (req, res) => {
  const userId = req.user.userId

  const balanceSale = await BalanceSales.findOne({
    where: { userId },
    attributes: ['currentBalance']
  })

  let currentBalance = 0
  if (balanceSale) {
    currentBalance = balanceSale.currentBalance
  }

  return res.status(200).json(response({ data: { currentBalance } }))
})

export default { getBalanceSale }
