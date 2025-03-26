const express = require("express")
const router = express.router()

const upload = require("../config/multer")

const pictureController = require("../controllers/pictureControllers")

router.post("/", upload.single("file"), pictureController.create);
