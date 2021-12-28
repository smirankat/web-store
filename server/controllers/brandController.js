const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class brandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async destroy(req, res) {
    const { name } = req.body;
    await Brand.destroy({
      where: { name },
    });
    return res.status(200).send("Removed Successfully");
  }
}

module.exports = new brandController();
