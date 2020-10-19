import User from "../models/User";

// CRUD - Create | Read | Update | Delete

class UserController {
  async index(req, res) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async store(req, res) {
    const { name, email } = req.body;

    if (!(name && email)) {
      return res
        .status(422)
        .json({ message: "Nome e email são obrigatórios!" });
    }

    try {
      const user = await User.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const userToUpdate = await User.findOne({
      id: id,
    });

    if (!userToUpdate) {
      return res
        .status(422)
        .json({ message: "Usuário não existe, ID inválido" });
    }

    await User.update(req.body);

    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  }

  async delete(req, res) {
    const userToDelete = await User.findOne({ id: req.params.id });

    if (!userToDelete) {
      return res
        .status(422)
        .json({ message: "Usuário não existe, ID inválido" });
    }

    await User.deleteOne({ id: req.params.id });

    return res.json({ message: "Usuário foi excluído!" });
  }
}

export default new UserController();