const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log("Error: ", err));
    app.use(cors())
    app.use(express.json())
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/movies", movieRoute);
    app.use("/api/lists", listRoute);
app.listen(PORT, () => {
    console.log("Server is running!");
});