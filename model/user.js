import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    imgprofile: {
        type: String,
        required: false
    },
    username: String,
    email: String,
    password: String,
    isFirebase: {
        type: Boolean,
        required: false
    }
},{
    timestamps: true
})

const User = mongoose.model('user',userSchema)

export default User