const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    videos: { 
        type: [String], 
        default: [] 
    },
    skills: { 
        type: [String], 
        default: [] 
    },
    fieldOfStudy: { 
        type: String 
    },
    certification: { 
        type: String 
    },
    experience: { 
        type: String 
    },
    points: {
        type: Number
    }
});

module.exports = mongoose.model('User', UserSchema);