import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect('mongodb+srv://arie:arie@cluster0.m0adiq2.mongodb.net/?retryWrites=true&w=majority')
}

export default connectMongo