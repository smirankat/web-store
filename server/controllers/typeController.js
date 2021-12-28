const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class typeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async destroy(req, res) {
    const { name } = req.body;
    await Type.destroy({
      where: { name },
    });
    return res.status(200).send("Removed Successfully");
  }
}

module.exports = new typeController();
