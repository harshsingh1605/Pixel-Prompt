import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.get('/', (req, res) => res.send('API Working Fine'));

// Start the Server
app.listen(PORT, () => console.log('Server is running on port ' + PORT));

