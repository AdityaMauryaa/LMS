import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 */
mongoose.set('strictQuery', false);

const connectionToDB = async () => {
    try {
        const dbURL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";

        const { connection } = await mongoose.connect(dbURL);

        console.log(`✅ Connected to MongoDB: ${connection.host}`);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1); // Exit with failure
    }
};

export default connectionToDB;
