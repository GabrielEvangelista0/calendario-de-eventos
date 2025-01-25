import UserSchema from "../models/users.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
    const { userName, email, password } = req.body;
    const errorMessage = "User creation failed";
    try {
        //checa se todos os campos foram preenchidos
        if(!userName || !email || !password){
            res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
            throw new Error(errorMessage);
        };
        //checa se ja existe um usuario com esse email
        if (await UserSchema.findOne({ email })) {
            res.status(400).json({ message: 'Um usuario ja existe com esse email crie outro ou logue' });
            throw new Error(errorMessage);
        };
        //checa se ja existe um usuario com esse userName
        if (await UserSchema.findOne({ userName })) {
            res.status(400).json({ message: 'Um usuario ja existe com esse userName crie outro ou logue' });
            throw new Error(errorMessage);
        };
        
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await UserSchema.create({ userName, email, password: hashPassword });
        req.session.userId = new user._id;
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        next(error);
    }
};

export const getAuthenticatedUser = async (req, res, next) => {
    const autanticado = req.session.userId;
    try {
        if(!autanticado){
            res.status(401).json({ message: 'Nao autenticado' });
            throw new Error('Not authenticated');
        };
        const user = await UserSchema.findById(autanticado).exec();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const user = await UserSchema.findOne({ userName }).select('+password +email').exec();
        if (!user) {
            res.status(401).json({ message: 'Usuario nao encontrado verifique o nome de usuario' });
            throw new Error('User not found');
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Senha invalida' });
            throw new Error('Invalid password');
        };

        req.session.userId = user._id;
        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        next(error);
    }
}

export const logoutUser = async (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500).json({ message: 'Error logging out' });
            throw new Error('Error logging out');
        };
        res.status(200).json({ message: 'User logged out successfully' });
    })
}

