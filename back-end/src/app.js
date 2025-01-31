import express from "express";
import "dotenv/config";
import eventosRouter from "../src/routes/eventos.js";
import usersRouter from "../src/routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use("/api/eventos", eventosRouter);
app.use("/api/users", usersRouter);

// Middleware para rotas não encontradas
app.use((req, res, next) => {
    res.status(404).json({ error: "Endpoint Not Found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || "An error occurred" });
});

export default app;
