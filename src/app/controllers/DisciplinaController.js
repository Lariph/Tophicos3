import Disciplina from "../models/Disciplina";

// CRUD - Create | Read | Update | Delete

class DisciplinaController {
  async index(req, res) {
    try {
      const disciplina = await Disciplina.find();

      return res.status(200).json(disciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async store(req, res) {
    const { codigo, nome, professor, departamento, QtdCreditos } = req.body;

    if (!(codigo && nome && professor && departamento && QtdCreditos)) {
      return res
        .status(422)
        .json({ message: "É necessário preencher todas as informações da disciplina" });
    }

    try {
      const disciplina = await Disciplina.create(req.body);

      return res.status(201).json(disciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const disciplinaUpdate = await Disciplina.findOne({
      id: id,
    });

    if (!disciplinaUpdate) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, ID inválido" });
    }

    await Disciplina.update(req.body);

    return res.status(200).json({ message: "Disciplina atualizado com sucesso!" });
  }

  async delete(req, res) {
    const disciplinaDelete = await Disciplina.findOne({ id: req.params.id });

    if (!disciplinaDelete) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, ID inválido" });
    }

    await Disciplina.deleteOne({ id: req.params.id });

    return res.json({ message: "Disciplina foi excluído!" });
  }
}

export default new DisciplinaController();