import * as EventosController from "..//controllers/eventos.js";
import express from "express";

const router = express.Router();

router.get('/', EventosController.getEventos);

router.get('/:id', EventosController.getEventoById);

router.get('/criador/:criador', EventosController.getEventoosByCriador);

router.post('/', EventosController.createEvento);

router.put('/:id', EventosController.updateEvento);

router.delete('/:id', EventosController.deleteEvento);

export default router;