// RENEWABLE API
// DESCRIPTION:     API endpoints to GET & POST renewable energy data

// ROUTER INITIALIZATION
const router = require("express").Router();
// MODEL IMPORTS
let renewable = require("../../models/renewable.model");
let renewableintegrated = require("../../models/renewable.integrated.model");

// Save Renewable Energy Details
router.post("/new", async (request, response) => {
    renewable.find(function (err, foundRenewable) {
            let newrenewable = new renewable(request.body);
            newrenewable.save(function (err, foundRenewable) {
            if (err) {
              return response.status(400).json("ERR: " + err);
            }
            return response.status(200).json(foundRenewable);
            });
    });
});

// Get Renewable Energy Details
router.get("/", async (request, response) => {
    renewable.findOne(function (err, foundRenewable) {
        if (err) {
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(foundRenewable);
    }).sort({_id:-1}).limit(1);
});

// Save Integrated Renewable Energy Details
router.post("/integrated", async (request, response) => {
    renewableintegrated.find(function (err, foundRenewable) {
            let newrenewableintegrated = new renewableintegrated(request.body);
            newrenewableintegrated.save(function (err, foundRenewable) {
            if (err) {
              return response.status(400).json("ERR: " + err);
            }
            return response.status(200).json(foundRenewable);
            });
    })
});

// Get Integrated Renewable Energy Details
router.get("/integrated", async (request, response) => {
    renewableintegrated.findOne(function (err, foundRenewable) {
        if (err) {
            console.log("ERR: " + err);
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(foundRenewable);
    }).sort({_id:-1}).limit(1);
});

module.exports = router;
