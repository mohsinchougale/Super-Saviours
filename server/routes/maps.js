import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  const { lat, lng } = req.body;
  const options = {
    method: "POST",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&type=police&key=AIzaSyCl8gVDp2RlhFo-pgxhswcI-u_8R2h-njI`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response);
      //   res.json(response.data);
    })
    .catch(function (error) {
      res.status(500).json({ message: error.message });
    });
});

export default router;
