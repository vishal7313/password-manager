import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import passwordAuthRoutes from './routes/passwordManger.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use('/api/auth', authRoutes);
app.use('/api/passwordAuth', passwordAuthRoutes);

// app.get('/', (req, res) => {
//     root route http://localhost:5000
//     res.send('Hello dasdasd');
// })

app.listen(5000, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
})