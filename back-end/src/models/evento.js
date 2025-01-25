import { model, Schema } from "mongoose";

const eventoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataInicio: {
        type: String,
        required: true
    },
    dataFim: {
        type: String,
        required: true
    },
    horaInicio: {
        type: String,
        required: true
    },
    horaFim: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    responsavel: {
        type: String,
        required: true
    },
});


export default model("Evento", eventoSchema);