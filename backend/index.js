const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const commentRoute = require("./routes/comments");

dotenv.config();
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log("Error: ", err));
app.use(cors());
app.use(express.json());
app.all('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.REACT_URL);
    res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    next()
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/comments", commentRoute);
app.listen(PORT, () => {
    console.log("Server is running!");
});