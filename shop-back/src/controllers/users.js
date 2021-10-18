import { User } from "../models/index";
import bcrypt from "bcryptjs";

const index = async (req, res) => {
    try{
        const users = await User.findAll();
        res.send(users);
    } catch (error){
        res.status(500).json(error);
    }
}

const create = async (req, res) => {
    try{
        bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS), (error, salt) => {
            bcrypt.hash(req.body.password, salt, async (error, hash) => {
                await  User.create({...req.body, password: hash});
                res.json({msg: "Created user"});
            });
        });
    }catch (error){
        res.status(500).json(error);
    }
} 

const read = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user !== null) res.send(user);
        else res.status(404).json({error: "User not found"});
    }catch (error){
        res.status(500).json(error);
    }
}

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const [ found ] = await User.update(req.body, {where:{id:id}});
        if (found) res.status(200).json({ msg: "Updated user" });
        else res.status(404).json({error: "User not found"});
    }catch (error){
        res.status(500).json(error);
    }
}

const remove = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await User.destroy({where:{id:id}});
        if (deleted) res.status(200).json({ msg: "Deleted user" });
        else res.status(404).json({error: "User not found"});
    }catch (error){
        res.status(500).json(error);
    }
} 

export default { index, create, read, update, remove }