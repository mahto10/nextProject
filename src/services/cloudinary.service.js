const cloudinary = require("../config/cloudinary");

const CloudinaryService = {
  uploadImage: async (filePath, options = {}) => {
    try {
      const result = await cloudinary.uploader.upload(filePath, options);
      return { url: result.secure_url, publicId: result.public_id };
    } catch (error) {
      throw new Error("Cloudinary upload failed");
    }
  },
};

module.exports = CloudinaryService;
