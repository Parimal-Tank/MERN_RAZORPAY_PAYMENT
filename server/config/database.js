import mongoose from "mongoose"; 

const connectDB = async () => {

    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb is Connected With ${connection.host}`)
}

export default connectDB;