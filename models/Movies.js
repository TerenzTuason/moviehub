import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.models["movies"] || mongoose.model("movies", movieSchema);