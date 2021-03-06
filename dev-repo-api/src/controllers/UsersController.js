import User from "../models/User"
import { createPasswordHash } from "../services/auth"

class UsersController {
  async index(req, res) {
    try {
      // Método find => Lista todos os usuários
      const users = await User.find()
      return res.json(users)
    } catch(err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  // Lista um usuário
  async show(req, res) {
    
  }

  async create(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if(user) {
        return res.status(422).json({ message: `User ${email} already exists.` })
      }

      // Criptografa password
      const encryptedPassword = await createPasswordHash(password)

      const newUser = await User.create({ email, password: encryptedPassword })

      return res.status(201).json(newUser)

    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async update(req, res) {
    
  }

  async destroy(req, res) {
    
  }
}

export default new UsersController()