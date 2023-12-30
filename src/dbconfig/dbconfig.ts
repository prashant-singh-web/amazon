
require('dotenv').config();

import mongoose from 'mongoose';

export async function connect() {
    try {
        if (!process.env.DATABASE_URL) {
            console.error('No database URL provided');
            return;
        }
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
}

