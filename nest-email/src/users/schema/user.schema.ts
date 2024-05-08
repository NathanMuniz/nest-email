import mongoose from "mongoose";



export const UserSchema = new mongoose.Schema({

    id: String,
    date: Date.now,
    name: String,
    surname: String,
    email: String,
    phone: Number,
    password: String,
    birthdaydate: Date,
    roles: [],
    auth: {
        email: {
            valid: Boolean
        },
        facebook: {
            userId: String,
        },
        gmail:{
            userId: String,
        }
    },
    settings: {},
    photos: {
        profilePic: {},
        gallery: {}
    }

})