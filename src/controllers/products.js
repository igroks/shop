import { Product } from "../models/index"

const index = async (req, res) => {
    try{
        const products = await Products.findAll();
        res.send(products);
    } catch (error){
        res.status(500).json(error);
    }
}

const create = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.send(product);
    }catch (error){
        res.status(500).json(error);
    }
}

const read = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product !== null) res.send(product);
        else res.status(404).json({error: "Product not found"});
    }catch (error){
        res.status(500).json(error);
    }
}

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const [ found ] = await Product.update(req.body, {where:{id:id}});
        if (found) res.status(200).json({ msg: "Updated product" });
        else res.status(404).json({error: "Product not found"});
    }catch (error){
        res.status(500).json(error);
    }
}

const remove = async (req, res) => {
    try{
        const { id } = req.params;
        const [ deleted ] = await Product.destroy({where:{id:id}});
        if (deleted) res.status(200).json({ msg: "Deleted product" });
        else res.status(404).json({error: "Product not found"});
    }catch (error){
        res.status(500).json(error);
    }
}

export default { index, create, read, update, remove }
