const connection = require('../database/connection')
const bcrypt = require('bcrypt')
module.exports = {
  async create(req, res) {
    const { user, pass } = req.body
    if (user && pass) {
      const admin = await connection('admins')
        .where('user', user)
        .select('*')
        .first()

      if (!admin) res.status(400).json({ message: "User not found" })
      const matching_passwords = await bcrypt.compare(pass, admin.password_hash)

      if (!matching_passwords) res.status(400).json({ message: "Verify your password" })

      const { admin_authorization } = admin
      res.status(200).json({ admin_authorization })


    } else {
      return res.status(400).json({ message: "Missing parameters" })
    }
  },
}
