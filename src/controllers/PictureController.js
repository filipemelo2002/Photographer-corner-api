const connection = require("../database/connection");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const { category = "ensaios" } = req.params;
    const { page = 1 } = req.query;
    const [count] = await connection("pictures")
      .where("category", category)
      .count();
    const response = await connection("pictures")
      .limit(9)
      .offset((page - 1) * 9)
      .where("category", category)
      .select("*");
    const total = count["count(*)"];
    return res.json({ pictures: response, total });
  },
  async store(req, res) {
    const { filename } = req.file;
    const { category } = req.body;

    if (!filename || !category) {
      return res.status(400).json({ message: "Error storaging image" });
    }
    const picture_id = crypto.randomBytes(4).toString("HEX");
    await connection("pictures").insert({
      picture: filename,
      category,
      picture_url: `/files/${filename}`,
      picture_id
    });
    const pic = await connection("pictures")
      .where("picture_id", picture_id)
      .select("*");
    return res.status(200).json(pic);
  },
  async delete(req, res) {
    const { id, picture } = req.params;

    if (!id || !picture) {
      return res.status(400).json({ message: "missing parameters" });
    }

    await connection("pictures")
      .where("picture_id", id)
      .del();
    const directory = path.resolve(__dirname, "..", "..", "uploads", picture);

    await fs.unlinkSync(directory, err => console.log(err));

    return res.status(201).send();
  }
};
