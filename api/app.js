import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const port = 2000;
const app = express();

app.use(express.json());
app.use(cookieParser( ));

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
