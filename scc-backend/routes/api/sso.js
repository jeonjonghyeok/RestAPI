// SSO API
// DESCRIPTION:     API endpoints to onboard users from other platforms

// ROUTER INITIALIZATION
const router = require("express").Router();
// MODEL IMPORTS
let User = require("../../models/user.model");
// UTILITY IMPORTS
const jwt = require("jsonwebtoken");
const {ssoAuth} = require("../../util/auth");

// Sign Up on Jeju SCC from other platforms
router.get("/", ssoAuth, (request, response) => {
    console.log("SSO REQUEST")
    User.findOne({ email: request.user.email })
        .then((user) => {
            // If user has registered before
            if (user) {
                console.log("EXISTING SSO USER");
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
                        // Return User details
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
            // If user is registering for the first time
            else {
                console.log("NEW SSO USER");
                let newu = request.user;
                newu['password'] = 'ssouser';
                newUser = new User(newu)
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
                                // Return User details
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
            }
        })
        .catch((err) => {
            return response.status(400).json("Error: " + err);
        });
});

module.exports = router;
