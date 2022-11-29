const User = require("../models/user.model");

controller.findOneByID = async (req, res) => {
  try {
    const { identifier } = req.params;

    const user = await User.findById(identifier);

    if (!user) {
      return res.status(404).json({ error: "User no encontrado" });
    }

    res.status(200).json(post);
  } catch (error) {
    debug({ error });
    res.status(500).json({ error: "Error interno de servidor" });
  }
};

module.exports = controller;
