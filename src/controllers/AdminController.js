const connection = require("../database/connection");

const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { user, pass } = req.body;
    if (user && pass) {
      const password_hash = await bcrypt.hash(pass, 8)

      const exists = await connection('admins').where({ user }).select('*').first()

      if (exists) return res.status(400).json({ message: "User already exists" })


      const admin_authorization = await bcrypt.hash(user, 8)
      const admin = await connection('admins').insert({
        user,
        password_hash,
        admin_authorization
      })

      return res.json({ admin_authorization })
    } else {
      return res.status(400).json({
        message: "Missing parameters"
      });
    }
  }
};
