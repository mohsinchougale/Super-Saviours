const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  client.messages
    .create({
      body: "Hello00",
      from: "+16165458834",
      to: "+919029077567",
    })
    .then((message) => console.log(message));
});

module.exports = router;
