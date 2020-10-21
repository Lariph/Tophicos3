import { Router } from "express";

import DisciplinaController from "./app/controllers/DisciplinaController";

const routes = new Router();

routes.get("/disciplinas", DisciplinaController.index);
routes.post("/disciplinas", DisciplinaController.store);

routes.put("/disciplinas/:id", DisciplinaController.update);
routes.delete("/disciplinas/:id", DisciplinaController.delete);

export default routes;