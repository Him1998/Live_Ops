const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require("./Schema/user");

const router = express.Router();
router.use(bodyParser.json());

router.get("/",(req,res) =>{
    res.send("<h1>welcome to login page</h1>");
})

router.post("/register", async (req, res) => {
    try {

        const { name, username, password } = req.body;
        const user = await User.findOne({ username });

        if (user) {
            return res.status(409).json({
                status: "failed",
                message: "user already exist"
            });
        }

        bcrypt.hash(password, 10, async (err, hash) => {

            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                })
            }

            const data = await User.create({
                name,
                username,
                password: hash
            });

            return res.status(200).json({
                status: "Success",
                message: "user registered successfully",
                data
            })
        });

    } catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});

router.post("/login", async (req, res) => {

    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                status: "Failed",
                message: "user not registered"
            })
        }

        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                })
            }
            if (result) {
                return res.status(200).json({
                    status: "Success",
                    message: "Login successful"
                })
            } else {
                return res.status(400).json({
                    status: "Failed",
                    message: "invalid credentials"
                })
            }
        });
    } catch (e) {
        return res.status(500).json({
            status : "Failed" ,
            message : e.message
        })
    }
});

router.get("/all",async (req,res) => {
     res.json({result : await User.find()})
});

module.exports = router;