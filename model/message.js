import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    parent_user_id: String,
    client_user_id: String,
    message: String,
    isRead: Boolean
},{
    timestamps: true
})

const Message = mongoose.model('message' , messageSchema)

export default Message