import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Not Exist" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.id;
  res.status(200).json({ msg: "Login Success"});
};


export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Can't Logout" });
    res.status(200).json({ msg: "You Have Log Out" });
  });
};
