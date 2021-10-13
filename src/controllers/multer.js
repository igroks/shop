import multer from "multer";
import { Product } from "../models/index"
import fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const { id } = req.params;
        const dir = `public/uploads/${id}`;
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage }).single("file");

const uploadFile = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product !== null){
        upload(req, res, (error) =>{
            if (error){
                res.status(500).json(error);
            }else{
                res.json({msg: "File uploded"});
            }
        });
    }else{
        res.status(404).json({error: "Product not found"});
    }
}

export default { uploadFile }