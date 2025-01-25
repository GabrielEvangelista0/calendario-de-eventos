import express from "express";
import "dotenv/config";
import eventosRouter from "../src/routes/eventos.js";

const app = express();
//acitar json
app.use(express.json());

// Middleware para lidar com requisições
app.use("/api/eventos",eventosRouter);

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