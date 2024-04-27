const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CookieParser = require('cookie-parser');
const CookieSession = require('cookie-session');
const passport = require('passport');
require('dotenv').config();
const { MONGODB_URL, PORT } = process.env
const router = require('./Routes/index');
const route = require('./Routes/Auth');
const PassportSetup = require('./Passport');
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
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(
    CookieSession({
        name: 'session',
        keys: ['Redwolf'],
        maxAge: 24 * 60 * 60 * 100,
    }));

app.use(passport.initialize());
app.use(passport.session());


app.use(CookieParser());
app.use(express.json());
app.use('/api', router);
app.use('/auth', route);

