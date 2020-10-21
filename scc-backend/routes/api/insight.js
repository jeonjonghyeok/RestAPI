// INSIGHT API
// DESCRIPTION:     API endpoints to GET & POST insight data

// ROUTER INITIALIZATION
const router = require("express").Router();
// MODEL IMPORTS
let insight = require("../../models/insight.map.model");
let keyinsight = require("../../models/keyInsight.model");


//API for Storing New Map Insight Details:
router.post("/new", async (request, response) => {
    const newinsight = new insight(request.body);
    newinsight.save(function (err, foundInsights) {
      if (err) {
        return response.status(400).json("ERR: " + err);
      }
      return response.status(200).json(foundInsights);
    });
});

//API to Getting Map Insight Details:
router.get("/", async (request, response) => {
    insight.find(function (err, foundInsights) {
        if (err) {
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(foundInsights);
    });
});

//API for Storing New Key Insight Details:
router.post("/keyinsight/new", async (request, response) => {
  keyinsight.find(function (err, foundkeyInsights) {
        let newkeyinsight = new keyinsight(request.body);
        newkeyinsight.save(function (err, foundkeyInsights) {
        if (err) {
          return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(foundkeyInsights);
        });
});
});

//API to Getting Key Insight Details:
router.get("/keyinsight", async (request, response) => {
    keyinsight.findOne(function (err, foundkeyInsights) {
        if (err) {
            return response.status(400).json("ERR: " + err);
        }
        return response.status(200).json(foundkeyInsights);
    }).sort({_id:-1}).limit(1);
});

module.exports = router;