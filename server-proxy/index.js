const express = require("express");
const accountSid = "ACc6dde8d3bd546176edf016e22dce8ba7";
const authToken = "71ccbf34f155759aec2685ad36958366";
const client = require("twilio")(accountSid, authToken);
const cors = require("cors");

const app = express();
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

app.use(express.json());
app.use(cors());

app.get("/message", async (req, res) => {
  client.messages
    .create({
      body: "Hello00",
      from: "+16165458834",
      to: "+919029077567",
    })
    .then((message) => console.log(message));
});

// client.messages
//   .create({
//     body: "Hello00",
//     from: "+16165458834",
//     to: "+919029077567",
//   })
//   .then((message) => console.log(message));
