// PARTNER API
// DESCRIPTION:     Contains all the API's required to onboard Jeju users to partner platforms

// ROUTER INITIALIZATION
const router = require("express").Router();
// UTILITY IMPORTS
const jwt = require("jsonwebtoken");

// Create token for Partner Platform
router.post("/createtoken", async (request, response) => {
    const user = request.body;
    jwt.sign(
        { user },
        process.env.partnerJwtSecret,
        {
            // expiresIn: 3600,
        },
        (err, token) => {
            if (err) {
                return response.status(400).json("Error: " + err);
            }
            return response.status(200).json({ token });
        }
    );
});

module.exports = router;