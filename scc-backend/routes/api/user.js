// USER API
// DESCRIPTION:     Contains all the User related API's (login, register etc.)

// ROUTER INITIALIZATION
const router = require("express").Router();
// MODEL IMPORTS
let User = require("../../models/user.model");
// UTILITY IMPORTS
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { auth } = require("../../util/auth");

// Register New User
router.post("/register", async (request, response) => {
    console.log("REGISTER REQUEST")
    const { email, password, name, SSN } = request.body;
    // Checking if user exists
    await User.findOne({ email: `${email}` })
        .then((user) => {
            if (user) {
                return response.status(400).json("User already exists!");
            }
            // If user does not exist
            else {
                const newUser = new User({
                    email,
                    password,
                    name,
                    SSN
                });
                // Create Salt & Hash
                bcrypt.genSalt(10, async (err, salt) => {
                    hash = await bcrypt.hash(newUser.password, salt);
                    newUser.password = hash;
                    // Adding newUser to Database
                    newUser
                        .save()
                        .then((user) => {

                            jwt.sign(
                                { id: user.id },
                                process.env.jwtSecret,
                                {
                                    // expiresIn: 3600,
                                },
                                (err, token) => {
                                    if (err) {
                                        throw err;
                                    }
                                    return response.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            email: user.email,
                                            name: user.name,
                                            SSN: user.SSN
                                        },
                                    });
                                }
                            );
                        })
                        .catch((err) => {
                            return response.status(400).json("Error: " + err);
                        });
                });
            }
        })
        .catch((err) => {
            return response.status(400).json("Error: " + err);
        });
});

// Login User
router.post("/login", async (request, response) => {
    console.log('LOGIN REQUEST')
    const { email, password } = request.body;
    // Checking if user exists
    await User.findOne({ email: `${email}` })
        .then((user) => {
            // If user does not exist
            if (!user) {
                return response.status(400).json("User does not exists!");
            }
            else {
                // Validate Password
                bcrypt
                    .compare(password, user.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            return response.status(400).json("Invalid credentials!");
                        } else {
                            jwt.sign(
                                { id: user.id },
                                process.env.jwtSecret,
                                {
                                    // expiresIn: 3600,
                                },
                                (err, token) => {
                                    if (err) {
                                        throw err;
                                    }
                                    return response
                                        .status(200)
                                        .json({
                                            token,
                                            user: {
                                                id: user.id,
                                                email: user.email,
                                                name: user.name,
                                                SSN: user.SSN
                                            },
                                        });
                                }
                            );
                        }
                    })
                    .catch((err) => { });
            }
        })
        .catch((err) => {
            return response.status(400).json("Error: " + err);
        });
});

// Get User Data (Authenticated)
router.get("/auth", auth, (request, response) => {
    console.log("AUTH REQUEST")
    User.findById(request.user.id)
        .select("-password")
        .then((user) => {
            return response.status(200).json(user);
        })
        .catch((err) => {
            return response.status(400).json("Error: " + err);
        });
});

module.exports = router;
