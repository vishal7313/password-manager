import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    //root route http://localhost:5000
    res.send('Hello dasdasd');
})
app.listen(5000, () => console.log(`Server Running on port ${PORT}`))