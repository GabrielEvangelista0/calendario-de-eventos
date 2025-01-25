import EventoModel from "../models/evento.js";

export const getEventos = async (req, res, next) => {
    try {
        const eventos = await EventoModel.find().exec();
        res.status(200).json(eventos);
    } catch (error) {
        next(error);
    }
}

export const getEventoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const evento = await EventoModel.findById(id).exec();
        res.status(200).json(evento);
    } catch (error) {
        next(error);
    }
}

export const createEvento = async (req, res, next) => {
    const { nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao } = req.body;
    try {
        const evento = await EventoModel.create({ nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao });
        res.status(201).json({ message: 'Evento created successfully', evento });
    } catch (error) {
        next(error);
    }
}

export const updateEvento = async (req, res, next) => {
    const { id } = req.params;
    const { nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao } = req.body;
    try {
        const evento = await EventoModel.findByIdAndUpdate(id, { nome, dataInicio, dataFim, horaInicio, horaFim, local, descricao }, { new: true }).exec();
        res.status(200).json({ message: 'Evento updated successfully', evento });
    } catch (error) {
        next(error);
    }
}

export const deleteEvento = async (req, res, next) => {
    const { id } = req.params;
    try {
        const evento = await EventoModel.findByIdAndDelete(id).exec();
        res.status(200).json({ message: 'Evento deleted successfully', evento });
    } catch (error) {
        next(error);
    }
}

/*
{
    "userName": "evento10",
    "dataInicio": "21/02/2025",
    "dataFim": "22/02/2025",
    "horaInicio": "12:00",
    "horaFim": "15:00",
    "local": "rua 401",
    "descricao": "teste"
}
*/