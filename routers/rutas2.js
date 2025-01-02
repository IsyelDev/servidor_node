
import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API!",
  });
});

app.get("/about", (req, res) => {
    res.status(200).json({
        message: "About me... I'm a passionate developer!",
    })
})



app.use((req, res) => {
    res.status(400).json({
        error: "Bad request",
        message: "Bad request INFORMATION"
    })
})


export default app