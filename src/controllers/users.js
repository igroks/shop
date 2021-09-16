import { v4 as uuidv4 } from "uuid";

let users = [];

const index = (req, res) => {
    res.send(users);
}

const create = (req, res) => {
    const user = req.body;
    console.log(user)
    users.push({ ...user, id: uuidv4() });
    return res.status(201).json();
} 

const read = (req, res) => {
    const { id } = req.params;
    const user = users.filter((u) => u.id == id)
    res.send(user)
}

const update = (req, res) => {
    const { id } = req.params
    const userId = users.findIndex((u) => u.id == id)
    if (userId == -1) return res.status(404).json({ error: "User not found" })
    if (req.body.name) users[userId].name = req.body.name
    if (req.body.email) users[userId].email = req.body.email
    res.status(200).json({ msg: "Updated user" })
}

const remove = (req, res) => {
    const { id } = req.params
    users = users.filter((u) => u.id != id)
    res.status(200).json({ msg: "Deleted user" })
} 

export default { index, create, read, update, remove }