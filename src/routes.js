import { Router } from "express";

import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.get("/user", UserController.index);
routes.post("/user", UserController.store);

routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

export default routes;