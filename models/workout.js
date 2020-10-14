const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true
    },
    name: { 
        type: String,
        trim: true,
        match: [/^[\w '\_\-]+$/, "Name can only contain Alphanumeric characters, spaces, dashes, and underscores"]
    },
    distance: { 
        type: Number,
        min: 0 
    },
    duration: { 
        type: Number,
        min: 0
    },
    weight: { 
        type: Number,
        min: 0 
    },
    sets: { 
        type: Number,
        min: 0 
    },
    reps: { 
        type: Number,
        min: 0 
    },
});

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    exercises: {
        type: [exerciseSchema],
        default: undefined,

    }
});

const Workout = mongoose.model("Transaction", workoutSchema);

module.exports = Workout;
