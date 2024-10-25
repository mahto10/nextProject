const cloudinary = require("../../config/cloudinary");

const uploadImage = async (filePath, options = {}) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    return result.secure_url;
  } catch (error) {
    throw new Error("Image upload failed");
  }
};

module.exports = { uploadImage };
