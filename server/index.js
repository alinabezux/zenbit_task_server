const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
require('dotenv').config();
const router = require('./routes/index');
const ApiError = require('./errors/ApiError');

const PORT = process.env.PORT


const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING'})
})
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.status).json({message: err.message});
    } else {
        res.status(500).json({error: 'Internal Server Error'});
    }
});
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()