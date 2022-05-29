const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
        profilePic: { type: String, default: "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" },
        isAdmin: { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);