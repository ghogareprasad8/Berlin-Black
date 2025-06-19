const express = require('express');
const multer = require('multer');
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// CREATE: Add new product
router.post('/addNewProduct', upload.single('image'), addProduct);

// READ: Get all products
router.get('/getAllProducts', getAllProducts);

// READ: Get single product by ID
router.get('/getProductById/:id', getProductById);

// UPDATE: Update product by ID (with optional image)
router.put('/updateProduct/:id', upload.single('image'), updateProduct);

// DELETE: Delete product by ID
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;
