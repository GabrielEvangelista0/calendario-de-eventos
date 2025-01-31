import UserSchema from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
    }

    if (await UserSchema.findOne({ email })) {
        return res.status(400).json({ message: 'Um usuário já existe com esse email, crie outro ou entre' });
    }

    if (await UserSchema.findOne({ userName })) {
        return res.status(400).json({ message: 'Um usuário já existe com esse userName, crie outro ou entre' });
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await UserSchema.create({ userName, email, password: hashPassword });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    const { userName, password } = req.body;

    try {
        const user = await UserSchema.findOne({ userName }).select('+password').exec();
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado, verifique o nome de usuário' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha inválida' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        next(error);
    }
};

export const autenticarJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; //Pegando o token corretamente

    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        req.user = decoded; //Salvando o usuário autenticado na requisição
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
};


export const getAuthenticatedUser = async (req, res, next) => {
    console.log(req.user.id);
    
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Usuário não autenticado" });
        }

        const user = await UserSchema.findById(req.user.id).select("-password -email"); //Pegando os dados do usuário

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const salvarEventosQuerParticipar = async (req, res, next) => { 
    const { id } = req.params;
    const { eventosQuerParticipar } = req.body;

    try {
        const user = await UserSchema.findById(id).exec();

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        if (!Array.isArray(eventosQuerParticipar)) {
            return res.status(400).json({ message: "eventosQuerParticipar deve ser um array" });
        }

        user.eventosQuerParticipar = eventosQuerParticipar;
        await user.save();

        res.status(200).json({ message: "Eventos salvos com sucesso", user });
    } catch (error) {
        next(error);
    }
};

export const getEventosQuerParticipar = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await UserSchema.findById(id)
            .populate("eventosQuerParticipar") // Isso carrega os detalhes dos eventos
            .exec();

        res.status(200).json(user.eventosQuerParticipar);
    } catch (error) {
        next(error);
    }
};

