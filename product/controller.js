import * as productDao from "./product-dao.js";

const ProductController = (app) => {
   app.get('/api/products/:foodId', findProductByFoodId)
   app.post('/api/products', createProduct);
   app.delete('/api/products/:foodId', deleteProductByFoodId);
    app.post('/api/products/:foodId/reviews', addReviewToProduct);
}

const findProductByFoodId = async (req, res) => {
  const foodId = req.params.foodId;
  const product = await productDao.findProductByFoodId(foodId);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
};

const createProduct = async (req, res) => {
  const userId = req.body.userid; 
  console.log(userId)
  const newProduct = await productDao.createProduct(req.body, userId);
  res.json(newProduct);
};


const deleteProductByFoodId = async (req, res) => {
  const foodId = req.params.foodId;
  const status = await productDao.deleteProductByFoodId(foodId);
  if (status.deletedCount > 0) {
    res.json(status);
  } else {
    res.sendStatus(404);
  }
};

const addReviewToProduct = async (req, res) => {
  console.log(req.body)
  const foodId = req.params.foodId;
  const review = req.body;
  const product = await productDao.addReviewToProduct(foodId, review);
  res.json(product);
};

export default ProductController;
