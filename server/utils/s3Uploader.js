const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

const s3 = new AWS.S3({
  region: 'eu-north-1', // change to your S3 region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadToS3 = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: 'berlinblack', // replace with your bucket name
    Key: `products/${Date.now()}_${file.originalname}`,
    Body: fileStream
  };

  return s3.upload(params).promise();
};

module.exports = { uploadToS3 };
