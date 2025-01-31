import { model, Schema } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        select: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    eventosCriados: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Evento',
        }
    ],
    eventosQuerParticipar: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Evento',
        }
    ]
})

export default model("User", userSchema);