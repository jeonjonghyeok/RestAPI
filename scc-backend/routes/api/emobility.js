// EMOBILITY API
// DESCRIPTION:     API endpoints to GET & POST emobility data

// ROUTER INITIALIZATION
const router = require("express").Router();
// MODEL IMPORTS
var emobility = require("../../models/emobility.model");
var emobilityIntegrated = require("../../models/emobility.integrated.model");

// Save E-Mobility Details
router.post('/new', (request, response) => {
    emobility.find(function (err, emobilityDetails) {
            let newemobility = new emobility(request.body);
            newemobility.save(function (err, emobilityDetails) {
            if (err) {
              return response.status(400).json("ERR: " + err);
            }
            return response.status(200).json(emobilityDetails);
            });
    });
});

// Get E-mobility Details
router.get('/', (request, response) => {
    emobility.findOne(function (err, emobilityDetails) {
        if (err) {
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(emobilityDetails);
    }).sort({_id:-1}).limit(1);
});

// Save Integrated E-Mobility Details
router.post('/integrated', (request, response) => {
    emobilityIntegrated.find(function (err, emobilityDetails) {
            let newemobilityIntegrated = new emobilityIntegrated(request.body);
            newemobilityIntegrated.save(function (err, emobilityDetails) {
            if (err) {
              return response.status(400).json("ERR: " + err);
            }
            return response.status(200).json(emobilityDetails);
            });

    });
});

// Get Integrated E-mobility details
router.get('/integrated', (request, response) => {
    emobilityIntegrated.findOne(function (err, integratedEmobilityDetails) {
        if (err) {
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(integratedEmobilityDetails);
    }).sort({_id:-1}).limit(1);
});

module.exports = router;