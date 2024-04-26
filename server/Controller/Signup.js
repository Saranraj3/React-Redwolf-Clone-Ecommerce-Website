const UserModel = require("../Models/UserModel");
const bcrypt = require('bcryptjs');

async function UserSignupController(req, res) {
    try {

        const { Firstname, Lastname, Email, Password } = req.body
        const user = await UserModel.findOne({ Email })

        if (user) {
            throw new Error('Already User Exits')
        }

        if (!Firstname) {
            throw new Error('Enter Your First Name')
        }
        if (!Lastname) {
            throw new Error('Enter Your Last Name')
        }
        if (!Email) {
            throw new Error('Enter Your Email')
        }
        if (!Password) {
            throw new Error('Enter Your Password')
        }

        const salt = bcrypt.genSaltSync(10);
        const HashPassword = await bcrypt.hashSync(Password, salt);

        if (!HashPassword) {
            throw new Error('Something Went Wrong')
        }

        const payload = {
            ...req.body,
            Password: HashPassword
        }

        const UserData = new UserModel(payload)
        const SaveUser = await UserData.save()

        res.status(201).json({
            data: SaveUser,
            success: true,
            error: false,
            message: 'User Created Successfully',
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = UserSignupController;