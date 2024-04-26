const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CookieParser = require('cookie-parser');
require('dotenv').config();
const { MONGODB_URL, PORT } = process.env
const router = require('./Routes/index');
const app = express();


//MongoDB Database Connection

mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(CookieParser());
app.use(express.json());
app.use('/api', router);







