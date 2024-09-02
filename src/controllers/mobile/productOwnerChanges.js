import Models from '../../db/mysql/models/index.js'

const { ProductOwnerChanges } = Models

export const changeProductOwner = ({ productId, userId }, transaction) => {
  return ProductOwnerChanges.create({
    productId,
    userId
  }, { transaction })
}
