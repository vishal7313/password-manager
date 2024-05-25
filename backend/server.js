const express = require('express')

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    //root route http://localhost:5000
    res.send('Hello dfsdf');
})
app.listen(5000, () => console.log('Server Running on port 5000'))