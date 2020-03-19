const Pictures = require("../models/Pictures");
const path = require("path");
const fs = require("fs");

module.exports = {
  async index(req, res) {
    const { category } = req.query;
    const response = await Pictures.find({ category });

    return res.json(response);
  },
  async store(req, res) {
    const { filename } = req.file;
    const { category } = req.body;

    if (!filename || !category)
      return res.status(400).json({ message: "Error storaging image" });

    const picture = await Pictures.create({
      picture: filename,
      category
    });
    return res.json(picture);
  },
  async delete(req, res) {
    const { id, picture } = req.params;

    await Pictures.findByIdAndDelete({ _id: id });
    const directory = path.resolve(__dirname, "..", "..", "uploads", picture);
    await fs.unlink(directory, err => console.log(err));
    return res.status(200).json({
      message: "File deleted"
    });
  }
};
