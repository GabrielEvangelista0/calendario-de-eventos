import app from './app.js';
import "dotenv/config";
import mongoose from 'mongoose';

const PORT = process.env.PORT;

mongoose.connect(process.env.mongo_conection_string)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });