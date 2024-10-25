const CloudinaryService = require("../services/cloudinary.service");

const CloudinaryController = {
  upload: () => async (req, res) => {
    try {
      const { path } = req.file;
      const result = await CloudinaryService.uploadImage(path, {
        folder: "uploads",
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = { CloudinaryController };
