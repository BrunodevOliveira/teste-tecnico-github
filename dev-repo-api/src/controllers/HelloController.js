class HelloController {
  async index(req, res) {
    return res.json({ hello: 'Flamengoo' })
  }
}

export default new HelloController()