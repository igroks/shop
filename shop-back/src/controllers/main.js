import { User, UserType } from "../models/index";
import bcrypt from "bcryptjs";

const signUp = async (req, res) => {
  try {
    bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS), (error, salt) => {
      bcrypt.hash(req.body.password, salt, async (error, hash) => {
        await User.create({ ...req.body, password: hash });
        res.json({ msg: "Created user" });
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email }, include: UserType });
    if (user) {
      bcrypt.compare(req.body.password, user.password, (error, ok) => {
        if (ok) {
          req.session.userId = user.id;
          req.session.userType = user.UserType.label;
          res.json({ msg: "Logged in user" });
        } else {
          res.status(401).json({ msg: "Incorrect email or password" });
        }
      });
    } else {
      res.status(401).json({ msg: "Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  req.session.destroy(() => {
    res.json({ msg: "Session closed" });
  });
};

export default { signUp, login, logout };
