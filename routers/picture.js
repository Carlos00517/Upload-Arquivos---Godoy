// Importa o módulo do Express para configurar as Rotas
const express = require("express");

// Cria a instância do roteador do express para definir ROTAS
const router = express.Router();

// Importa a configuração do Multer para ligar com uploads de arquivos
const upload = require("../config/multer");

// Importa o controlador da IMg, onde tem todas as funções e busca
const PictureController = require("../controllers/pictureControllers");

// Definindo a rota POST para criar, e fazer upload da imagem
router.post("/", upload.single("file"), PictureController.create);

// Definindo a rota GET para buscar todas as imagens do DB
router.get("/", PictureController.findAll);

// Exportando o arquivo para utilizar no app.js
module.exports = router;