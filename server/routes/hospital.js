import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/:lat/:lng", async (req, res) => {
  const lat = req.params.lat;
  const lng = req.params.lng;

  var options = {
    method: "POST",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&type=hospital&key=AIzaSyCl8gVDp2RlhFo-pgxhswcI-u_8R2h-njI`,
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.post("/number/:placeid", async (req, res) => {
  const placeId = req.params.placeid;

  var options = {
    method: "POST",
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyCl8gVDp2RlhFo-pgxhswcI-u_8R2h-njI`,
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

export default router;
