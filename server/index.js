const express = require("express");

const app = express();
const mode = process.env.MODE.trim();

app.get("/", (_, res) => {
    const data = {mode, date: new Date()};

    return res.json(data);
})



app.listen("4202", "0.0.0.0", () => {
    console.log("running in port 4202")
})