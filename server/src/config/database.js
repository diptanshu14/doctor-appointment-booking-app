import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.connect(`${process.env.DB_URI}/prescripto`).then(() => {
        console.log("Server is connnected to database")
    }).catch((error) => {
        console.log("Error while connecting to database", error.message)
    })
}

export default connectDB