const UserModel = require("../models/UserModel");

const getAll = async (req, res) => {
  try {
    const userData = await UserModel.find();

    if (!userData) {
      return res.status(404).json({ msg: "Users not found" });
    }
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const create = async (req, res) => {
  try {
    const userData = await UserModel.create(req.body);

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;

    const userData = await UserModel.findByIdAndUpdate(
      id,
      { name: req.body.name, email: req.body.email, age: req.body.age },
      { new: true }
    );

    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userData = await UserModel.findByIdAndDelete(id);

    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = { getAll, create, update, deleteUser };
