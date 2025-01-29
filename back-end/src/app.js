import express from "express";
import "dotenv/config";
import eventosRouter from "../src/routes/eventos.js";
import usersRouter from "../src/routes/users.js";
import session from "express-session";
import mongoStore from "connect-mongo";
import cors from "cors";

const app = express();
//acitar json
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    rolling: true,
    store: mongoStore.create({
        mongoUrl: process.env.mongo_conection_string
    })
}))

// Middleware para lidar com requisições
app.use("/api/eventos",eventosRouter);
app.use("/api/users",usersRouter);

// Middleware para lidar com erros
app.use((req, res, next) => {
    next(new Error("Endpoint Not Found"));
})
// Middleware para lidar com erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    let errorMesage = "An error occurred";
    if (errorMesage instanceof Error) errorMesage = errorMesage.message;
    res.status(500).json({ error: errorMesage });
})

export default app;