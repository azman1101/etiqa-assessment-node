const m = require('../models');

async function index(req, res) {
  try {
    const data = await m.Freelancer.findAll();
    res.json({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function create(req, res) {
  try {
    const newFreelancer = await m.Freelancer.create({ ...req.body });
    res.json({ data: newFreelancer });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function update(req, res) {
  try {
    const status = await m.Freelancer.update({ ...req.body }, { where: { id: req.params.id } });
    res.json({ status });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function destroy(req, res) {
  try {
    const status = await m.Freelancer.destroy({ where: { id: req.params.id } });
    res.json({ status });
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = {
  index, create, update, destroy,
};
