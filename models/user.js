import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        avatar: String,
        role: String,
        isAdmin: Boolean,
    },
    { timestamps: true }
);

export const User = mongoose.models.user || mongoose.model("user", userSchema);
