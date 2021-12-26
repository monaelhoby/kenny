const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

sgMail.setApiKey(
  "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"
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server");
});

app.get("/send-email", (req, res) => {
  const { recipient, sender, topic, text } = req.query;

  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
  };

  sgMail.send(msg).then((msg) => console.log(text));
});

app.listen(4000, () => console.log("Running on Port 4000"));
