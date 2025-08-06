import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

import connectionToDB from './config/dbConnection.js';
import app from './app.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

/**
 * Cloudinary Configuration - for media uploads
 */
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Razorpay Configuration - for payment gateway
 */
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

/**
 * Start the server after connecting to DB
 */
app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
