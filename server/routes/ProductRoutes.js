const express = require('express');
const multer = require('multer');
const { uploadToS3 } = require('../utils/s3Uploader');
const Product = require('../models/Product');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // temporary local storage

// POST /api/products/add
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    // Upload image to S3
    const s3Result = await uploadToS3(req.file);

    // Save product info to DB
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      sizes: req.body.sizes.split(','),
      inventory: req.body.inventory,
      imageUrls: [s3Result.Location]  // S3 image URL
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Product upload failed', error });
  }
});

module.exports = router;
