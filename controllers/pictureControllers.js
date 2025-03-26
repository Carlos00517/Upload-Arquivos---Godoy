const { get } = require("http");
const picture = require("../models/picture");
const Picture = require("../models/picture")

const fs = require("fs")

exports.create = async (req, res) => {
    res,json("OK!");
 
    try{
        const { name} = req.body

        const file = req.file
        
        const picture = new picture({
            name,
            src: file.path,
        })
        await picture.save()

        res.json({picture, msg: "imagen salva com suceso!"})
    }catch (error){
        res.status(500).json({message: "Erro ao salvar"});
    }
};
exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find()

        res.json(pictures);
    }catch (error)  {
        res.status(500).json({message: "Erro ao buscar!" })
    }
};