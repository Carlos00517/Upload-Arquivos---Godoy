const multer = require("multer")

const path = require("path")

const storange = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalmente));
    },
});

const upload = multer({storage});

module.exports = upload;
