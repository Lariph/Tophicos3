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
    const disciplinaRepetida = await Disciplina.findOne({ 
      codigo: codigo 
    });

    if (disciplinaRepetida) {
      return res
        .status(422)
        .json({ message: "Disciplina já existe!" });
    }

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
    const { codigo } = req.body;

    const disciplinaUpdate1 = await Disciplina.findOne({
      id: id, 
    });

    const disciplinaUpdate2 = await Disciplina.findOne({
      codigo: codigo 
    });

    if (!(codigo)) {
      return res
        .status(422)
        .json({ message: "É necessário fornecer o código da disciplina" });
    }

    if (!disciplinaUpdate2) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, código inválido" });
    }

    if (!disciplinaUpdate1) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, ID inválido" });
    }

    await Disciplina.update(req.body);

    return res.status(200).json({ message: "Disciplina atualizada com sucesso!" });
  }

  async delete(req, res) {
    const disciplinaDelete1 = await Disciplina.findOne({ id: req.params.id });
    const { codigo } = req.body;

    const disciplinaDelete2 = await Disciplina.findOne({
      codigo: codigo 
    });

    if (!(codigo)) {
      return res
        .status(422)
        .json({ message: "É necessário fornecer o código da disciplina" });
    }

    if (!disciplinaDelete2) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, código inválido" });
    }

    if (!disciplinaDelete1) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, ID inválido" });
    }

    await Disciplina.deleteOne({ id: req.params.id });

    return res.json({ message: "Disciplina foi excluída!" });
  }
}

export default new DisciplinaController();