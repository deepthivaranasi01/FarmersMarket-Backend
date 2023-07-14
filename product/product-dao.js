import productmodel from "./product-model.js";

export const findProductByFoodId = (foodId) =>
  productmodel.findOne({ foodId });

export const createProduct = async (product, userId) => {
  let existingProduct = await productmodel.findOne({ foodId: product.foodId });
  if (existingProduct) {
    if (!existingProduct.otherCollectionIds.includes(userId)) {
      existingProduct.otherCollectionIds.push(userId);
      await existingProduct.save();
    }
    return existingProduct;
  } else {
    console.log(userId)
    product.otherCollectionIds = [userId];
    return productmodel.create(product);
  }
}


export const deleteProductByFoodId = (foodId) => {
  return productmodel.deleteOne({ foodId });

}
export const addReviewToProduct = async (foodId, review) => {
  console.log(foodId)
  const product = await productmodel.findOne({ foodId });
  product.reviews.push(review);
  await product.save();
  return product;
}
