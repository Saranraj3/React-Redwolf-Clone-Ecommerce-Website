const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User_Model');
const createError = require('../Utils/Error');

// Signup
exports.signup = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return next(new createError('User Already Exists', 400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        // json web token
        const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
            expiresIn: '90d',
        });
        res.status(201).json({
            status: 'success',
            message: 'User Registerd Successfuly',
            token,
            user: {
                _id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
// Login
exports.login = async (req, res, next) => {

    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return next(new createError('User not Found!', 404));

        const isPasswordvalid = await bcrypt.compare(password, user.password);

        if (!isPasswordvalid) {
            return next(new createError('Invalid email OR password', 401));
        };

        // json web token
        const token = jwt.sign({ _id: user._id }, 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'Success',
            token,
            message: 'Logged In Successfully',
            user: {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                role: user.role,
            },

        });
    } catch (error) {
        next(error);
    }
};
