const { Router } = require("express");
const {
  CloudinaryController,
} = require("../controllers/cloudinary.controller");
const multer = require("multer");


const upload = multer({ dest: "uploads/" });

const router = Router();

const CloudinaryRouter = (router) => {
  router.post(
    "/upload",
    upload.single("image"), 
    CloudinaryController.upload()
  );

  return router;
};

module.exports = { CloudinaryRouter: CloudinaryRouter(router) };
