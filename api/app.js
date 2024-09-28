import express from "express";

const port = 2000;
const app = express();

app.use("/api/test", (req, res) => {
    res.send("<h2>Server working !!</h2>");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
