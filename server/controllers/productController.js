const Product = require('../models/Product');
const { uploadToS3 } = require('../utils/s3Uploader');

// CREATE
exports.addProduct = async (req, res) => {
  try {
    const s3Result = await uploadToS3(req.file);
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      sizes: req.body.sizes.split(','),
      inventory: req.body.inventory,
      imageUrls: [s3Result.Location]
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product added', product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add product', error: err });
  }
};

// READ: All products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err });
  }
};

// READ: Single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch product', error: err });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    let imageUrls = req.body.imageUrls ? req.body.imageUrls.split(',') : [];
    if (req.file) {
      const s3Result = await uploadToS3(req.file);
      imageUrls.push(s3Result.Location);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        sizes: req.body.sizes.split(','),
        inventory: req.body.inventory,
        imageUrls
      },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err });
  }
};