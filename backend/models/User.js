const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
        profilePic: { type: String, default: "https://i.pinimg.com/550x/2d/39/c7/2d39c7b2287252c50372d21de96b1813.jpg" },
        isAdmin: { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);